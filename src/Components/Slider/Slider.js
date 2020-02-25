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
          1: "psfaionegobogpbbheihfoioins"
        }
      }
    }
  },
  {
    bg: {
      1: "url(https://static.zara.net/photos//mkt/spots/ss20-north-crossover-woman-basic/subhome-xmedia//landscape_0.jpg) center/cover",
      2: "url(https://static.zara.net/photos//mkt/spots/ss20-north-awakening-woman-basic/subhome-xmedia-08-1//landscape_0.jpg) center/cover",
      3: "url(https://static.zara.net/photos//mkt/spots/ss20-north-collection-woman/subhome-xmedia-08-2//landscape_0.jpg) center/cover",
      4: "url(https://static.zara.net/photos//mkt/spots/ss20-north-shoes-and-bags-woman/subhome-xmedia//landscape_0.jpg) center/cover"
    },
    text: {
      1: {
        title: "crossover",
        subtitle: {
          1: "No fashion dictates, no borders is the essence of 2020 allure."
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
          1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, possimus.",
          2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, possimus."
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
            </div>
            <div className="text-container__btn">view</div>
          </div>
        </section>
        <section className="main__section" style={{ background: item.bg[2] }}>
          <div className="text-container">
            <div className="text-container__title">knitwear Collection</div>
            <div className="text-container__subtitle">
              Knit is something that you should consider buying
            </div>
            <div className="text-container__btn">view</div>
          </div>
        </section>
        <section className="main__section" style={{ background: item.bg[3] }}>
          <div className="text-container">
            <div className="text-container__title">Collection</div>
            <div className="text-container__subtitle">
              Discover this week the latest pieces from our latest collection
              <br />
              Spring Summer 2020 Woman
              <br />
              Selected pieces with new pictures curated for you.
            </div>
            <div className="text-container__btn">view</div>
          </div>
        </section>
        <section className="main__section" style={{ background: item.bg[4] }}>
          <div className="text-container">
            <div className="text-container__title">Shoes & Bags</div>
            <div className="text-container__subtitle">
              Discover this week the latest pieces from our latest collection
              <br />
              Spring Summer 2020 Woman
              <br />
              Selected pieces with new pictures curated for you.
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
