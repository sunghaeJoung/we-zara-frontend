import React, { Component } from "react";
import "./Slider.scss";
import Section from "./Section/Section";
import * as Rx from "rxjs-es";

const data = [
  {},
  {
    bg: {
      4: ""
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
const TRANSITION_TIME = 1500;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderIndex: START_INDEX,
      vIndex: 0
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

    const downBtnClick$ = Rx.Observable.fromEvent(
      this.refs["down-slider"],
      "click"
    ).map(() => 1);

    // stream of mousewheel
    const buttonClicks$ = Rx.Observable.merge(prevBtnClick$, nextBtnClick$)

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

    const downS$ = Rx.Observable.fromEvent(window, "wheel")
      .map(event => (event.deltaY < 0 ? -1 : 1))
      .merge(downBtnClick$)
      .throttleTime(TRANSITION_TIME)
      .startWith(1)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < 5) {
          return next;
        } else {
          return prev;
        }
      }, 1)
      .distinctUntilChanged();

    // Subscribe to the stream and update react state
    downS$.subscribe(vIndex => this.setState({ vIndex }));
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
    const styleY = {
      transition: "all ease",
      height: data.length * 100 + "vh",
      transitionDuration: TRANSITION_TIME + "ms",
      transform: `translateY(${this.state.vIndex * -100}vh)`
    };

    const slides = this.props.sliderData.map(data => (
      <div style={styleY}>
        <Section
        // title=""
        // subtitle1=""
        // subtitle2=""
        // subtitle3=""
        />
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

        <button className="slider__btn slider__btn--down" ref="down-slider">
          <p style={{ marginBottom: -5 }}>SCROLL</p>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 129 129"
            width="30"
            height="30"
            fill="#fff"
          >
            <g>
              <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"></path>
            </g>
          </svg>
        </button>
      </main>
    );
  }
}

export default Slider;
