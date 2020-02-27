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

const transitionTime = 1500;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalIndex: 0,
      verticalIndex: 0
    };
  }

  componentDidMount() {
    const prevBtnClick$ = Rx.Observable.fromEvent(
      this.refs["prev-slider"],
      "click"
    ).map(() => -1);
    const nextBtnClick$ = Rx.Observable.fromEvent(
      this.refs["next-slider"],
      "click"
    ).map(() => 1);
    const downBtnClick$ = Rx.Observable.fromEvent(
      this.refs["down-slider"],
      "click"
    ).map(() => 1);

    const mouseWheelChange$ = Rx.Observable.fromEvent(window, "wheel")
      .map(event => (event.deltaY < 0 ? -1 : 1))
      .merge(downBtnClick$)
      .throttleTime(transitionTime)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < 5) {
          return next;
        } else {
          return prev;
        }
      }, 0)
      .distinctUntilChanged();

    const horizontal$ = Rx.Observable.fromEvent()
      .merge(prevBtnClick$, nextBtnClick$)
      .throttleTime(transitionTime)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < 3) {
          return next;
        } else {
          return prev;
        }
      }, 0)
      .distinctUntilChanged();

    // Subscribe to the stream and update react state
    mouseWheelChange$.subscribe(verticalIndex =>
      this.setState({ verticalIndex })
    );

    horizontal$.subscribe(horizontalIndex =>
      this.setState({ horizontalIndex })
    );
  }

  render() {
    let down = (
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
    );

    if (this.state.verticalIndex === 4) {
      down = "";
    }

    const transitionY = this.state.verticalIndex * -100;
    const transitionX = this.state.horizontalIndex * -100;

    const styleX = {
      width: 3 * 100 + "vw",
      height: 5 * 100 + "vh",
      transition: "all ease",
      transitionDuration: transitionTime + "ms",
      transform: `translateX(${transitionX}vw) translateY(${transitionY}vh)`
    };

    const contentM = this.props.data.map(data => (
      <div style={{ background: data.bgM, height: "100vh", width: "100vw" }} />
    ));

    // const contentW = this.props.data.map(data => (
    //   <div style={{ background: data.bgW, height: "100vh", width: "100vw" }} />
    // ));

    return (
      <main>
        <div style={styleX}>{contentM}</div>

        <button className="slider__btn slider__btn--prev" ref="prev-slider">
          prev
        </button>
        <button className="slider__btn slider__btn--next" ref="next-slider">
          next
        </button>

        <button className="slider__btn slider__btn--down" ref="down-slider">
          {down}
        </button>
      </main>
    );
  }
}

export default Slider;
