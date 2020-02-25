import React, { Component } from "react";
import "./Slider.scss";
import * as Rx from "rxjs-es";

const data = [
  {
    bg: {
      1: "url(https://static.zara.net/photos//mkt/spots/ss20-north-new-in-man/subhome-xmedia-08//landscape_0.jpg) center/cover",
      2: "url(https://static.zara.net/photos//mkt/spots/ss20-chillida-collection-man/subhome-xmedia-08//landscape_0.jpg) center/cover",
      3: "url(https://static.zara.net/photos//mkt/spots/ss20-north-collection-man/subhome-xmedia-08//landscape_0.jpg) center/cover",
      4: "url(https://static.zara.net/photos//mkt/spots/ss20-north-shoes-and-bags-man/subhome-xmedia-06//landscape_0.jpg) center/cover",
      5: "url(https://static.zara.net/photos//mkt/spots/ss20-north-joinlife-man/subhome-xmedia-08//landscape_0.jpg) center/cover"
    },
    text: {
      1: {
        title: "new in",
        subtitle: {
          1: "Explore week's latest menswear pieces of the",
          2: "season curated for you.",
          3: "Spring Summer Man Collection"
        }
      },
      2: {
        title: "knitwear",
        subtitle: {
          1: "Spring pieces designed with style and function in mind"
        }
      },
      3: {
        title: "collection",
        subtitle: {
          1: "Discover this season’s new collection built around",
          2: "staple pieces and trend-focused items.",
          3: "Men’s Spring Summer Collection"
        }
      },
      4: {
        title: "show & bags",
        subtitle: {
          1: "Explore the new collection of Shoes & Bags",
          2: "Spring Summer Man Collection"
        }
      }
    }
  },
  {
    bg: {
      1: "url(https://static.zara.net/photos//mkt/spots/ss20-north-join-life-woman/subhome-xmedia//landscape_0.jpg?ts=1582547884469) center/cover",
      3: "url(https://static.zara.net/photos//mkt/spots/ss20-north-leather-woman-basic/subhome-xmedia-collection//landscape_0.jpg) center/cover",
      4: "url(https://static.zara.net/photos//mkt/spots/ss20-north-shoes-and-bags-woman/subhome-xmedia//landscape_0.jpg) center/cover"
    },
    text: {
      1: {
        title: "join life ss20",
        subtitle: {
          1: "Working towards sustainability"
        }
      },
      2: {
        title: "new in",
        subtitle: {
          1: ""
        }
      },
      3: {
        title: "collection",
        subtitle: {
          1: "Discover this week the latest pieces from our latest collection",
          2: "Spring Summer 2020 Woman",
          3: "Selected pieces with new pictures curated for you."
        }
      },
      4: {
        title: "shoes & bags",
        subtitle: {
          1: "Explore the new collection of Shoes & Bags",
          2: "Spring Summer 2020 Woman",
          3: "Selected pieces with new pictures curated for you"
        }
      }
    }
  },
  {
    bg: {
      1: "url(https://static.zara.net/photos//mkt/spots/ss20-north-new-view-of-denim-kids/subhome-xmedia//landscape_0.jpg?ts=1582540193170) center/cover",
      2: "url(https://static.zara.net/photos//mkt/spots/ss20-north-finding-neon-kids/subhome-xmedia//landscape_0.jpg) center/cover",
      3: "url(https://static.zara.net/photos//mkt/spots/ss20-north-collection-kids/subhome-xmedia-08//landscape_0.jpg) center/cover",
      4: "url(https://static.zara.net/photos//mkt/spots/ss20-north-travel-capsule-kids/subhome-xmedia//landscape_0.jpg) center/cover",
      5: "url(https://static.zara.net/photos//mkt/spots/ss20-north-joinlife-kids/subhome-xmedia-08//landscape_0.jpg) center/cover"
    },
    text: {
      1: {
        title: "new in girl",
        subtitle: {
          1: "Discover our new denim collection.",
          2: "Welcome Spring with the latest black",
          3: "and white denim trends."
        }
      },
      2: {
        title: "finding neon",
        subtitle: {
          1: "Discover our new season’s trend for kids.",
          2: "Welcome Spring with natural colors embraced",
          3: "by bright neons."
        }
      },
      3: {
        title: "collection",
        subtitle: {
          1: "Discover this week the latest pieces from our latest collection",
          2: "Spring Summer 2020 Kids",
          3: "Selected pieces with new pictures curated for you"
        }
      },
      4: {
        title: "shoes & bags",
        subtitle: {
          1: "Explore the new collection of Shoes & Bags",
          2: "Spring Summer 2020 Kids",
          3: "Selected pieces with new pictures curated for you"
        }
      }
    }
  }
];

const START_INDEX = 1;
const TRANSITION_TIME = 500;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderIndex: START_INDEX
    };
  }

  componentDidMount() {
    // create stream of click events and map it to -1 that means go to prev slide
    const prevBtnClick$ = Rx.Observable.fromEvent(
      this.refs["prev-slider"],
      "click"
    ).map(() => -1);
    // create stream of click events and map to 1 that means go to next slide
    const nextBtnClick$ = Rx.Observable.fromEvent(
      this.refs["next-slider"],
      "click"
    ).map(() => 1);

    const downBtnClick$ = Rx.Observable.fromEvent(this.refs[""]).map(() => -1);

    // stream of mousewheel
    const buttonClicks$ = Rx.Observable.fromEvent()
      .merge(prevBtnClick$, nextBtnClick$)
      .throttleTime(TRANSITION_TIME)
      .startWith(START_INDEX)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < data.length) {
          return next;
        } else {
          return prev;
        }
      }, 0)
      .distinctUntilChanged();

    // Subscribe to the stream and update react state
    buttonClicks$.subscribe(sliderIndex => this.setState({ sliderIndex }));
  }

  render() {
    let prev;
    let next;
    if (this.state.sliderIndex === 0) {
      prev = "";
      next = "WOMAN >";
    } else if (this.state.sliderIndex === 1) {
      prev = "MAN <";
      next = "> KID ";
    } else {
      prev = "WOMAN <";
      next = "";
    }

    const transition = this.state.sliderIndex * -100;
    const style = {
      width: data.length * 100 + "vw",
      transitionDuration: TRANSITION_TIME + "ms",
      transform: `translateX(${transition}vw)`
    };

    const slides = data.map(item => (

      <div className="smooth">
        <section className="main__section" style={{ background: item.bg[1] }}>
          <div className="text-container">
            <div className="text-container__title">{item.text[1].title}</div>
            <div className="text-container__subtitle">

              {item.text[1].subtitle[1]}
              <br />
              {item.text[1].subtitle[2]}
              <br />
              {item.text[1].subtitle[3]}
            </div>
            <div className="text-container__btn">view</div>
          </div>

        </section>
        <section className="main__section" style={{ background: item.bg[2] }}>
          {this.state.sliderIndex === 1 && (
            <video loop playsInline autoPlay muted className="video">
              <source
                src="https://static.zara.net/video///mkt/2020/2/ss20-north-leather-woman-basic/video/w/2560//portrait/video_0.mp4?ts=1582547763449"
                type="video/mp4"
              />
            </video>
          )}
          <div className="text-container">
            <div className="text-container__title">{item.text[2].title}</div>
            <div className="text-container__subtitle">
              {item.text[2].subtitle[1]}
              <br />
              {item.text[2].subtitle[2]}
              <br />
              {item.text[2].subtitle[3]}
            </div>
            <div className="text-container__btn">view</div>
          </div>
        </section>
        <section className="main__section" style={{ background: item.bg[3] }}>
          <div className="text-container">
            <div className="text-container__title">{item.text[3].title}</div>
            <div className="text-container__subtitle">
              {item.text[3].subtitle[1]}
              <br />
              {item.text[3].subtitle[2]}
              <br />
              {item.text[3].subtitle[3]}
            </div>
            <div className="text-container__btn">view</div>
          </div>
        </section>
        <section className="main__section" style={{ background: item.bg[4] }}>
          <div className="text-container">
            <div className="text-container__title">{item.text[4].title}</div>
            <div className="text-container__subtitle">
              {item.text[4].subtitle[1]}
              <br />
              {item.text[4].subtitle[2]}
              <br />
              {item.text[4].subtitle[3]}
            </div>
            <div className="text-container__btn">view</div>
          </div>
        </section>
        <section className="main__section" style={{ background: item.bg[5] }}>
          <div className="text-container">
            {this.state.sliderIndex === 1 && (
              <video loop playsInline autoPlay muted className="video">
                <source
                  src="https://static.zara.net/video///mkt/2020/2/ss20-north-joinlife-woman/video/w/2560//landscape/video_0.mp4?ts=1582195014625"
                  type="video/mp4"
                />
              </video>
            )}
            <div className="text-container__title">Join Life</div>
            <div className="text-container__subtitle">
              We work hard to ensure our products become more and more
              sustainable.
              <br />
              Search for new processes and raw materials that help us make our
              products more responsibly
            </div>
            <div className="text-container__btn">view</div>
          </div>
        </section>
      </div>
    ));

    return (
      <main className="main">
        <div className="slider__wrapper" style={style}>
          {slides}
        </div>

        <button className="slider__btn slider__btn--prev" ref="prev-slider">
          {prev}
        </button>
        <button className="slider__btn slider__btn--next" ref="next-slider">
          {next}
        </button>
      </main>
    );
  }
}

export default Slider;
