import React, { Component } from "react";
import "./Slider.scss";
import Section from "./Section/Section";
import * as Rx from "rxjs-es";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hIndex: 1,
      vIndex: 0
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

    const horizontal$ = Rx.Observable.merge(prevBtnClick$, nextBtnClick$)
      .throttleTime(500)
      .startWith(0)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < 3) {
          return next;
        } else {
          return prev;
        }
      }, 1)
      .distinctUntilChanged();

    horizontal$.subscribe(hIndex => this.setState({ hIndex }));

    const vertical$ = Rx.Observable.fromEvent(window, "wheel")
      .map(event => (event.deltaY < 0 ? -1 : 1))
      .merge(downBtnClick$)
      .throttleTime(1400)
      .startWith(0)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < 5) {
          return next;
        } else {
          return prev;
        }
      }, 0)
      .distinctUntilChanged();

    vertical$.subscribe(vIndex => this.setState({ vIndex }));
  }

  render() {
    let prev;
    let next;
    if (this.state.hIndex === 0) {
      prev = "";
      next = "WOMAN >";
    } else if (this.state.hIndex === 1) {
      prev = "MAN <";
      next = "> KID ";
    } else {
      prev = "WOMAN <";
      next = "";
    }

    const transitionX = this.state.hIndex * -100;
    const transitionY = this.state.vIndex * -100;

    const styleX = {
      transition: "all ease",
      width: "300vw",
      transitionDuration: "500ms",
      transform: `translateX(${transitionX}vw)`
    };

    const styleY = {
      transition: "all ease",
      height: "500vh",
      transitionDuration: "1400ms",
      transform: `translateY(${transitionY}vh)`
    };

    const slides = this.props.data.map(obj => (
      <div style={styleY} className="slider__item">
        <Section title={obj.text.title[0]} style={{ background: obj.bg }} />

        <div>
          <Section title={obj.text.title[1]} />
        </div>

        <div>
          <Section title={obj.text.title[2]} />
        </div>

        <div>
          <Section title={obj.text.title[3]} />
        </div>

        <div>
          <Section title={obj.text.title[4]} />
        </div>
      </div>
    ));

    return (
      <main className="main">
        <div className="slider__wrap" style={styleX}>
          {slides}
        </div>

        <button className="slider__btn slider__btn--prev" ref="prev-slider">
          {prev}
        </button>

        <button className="slider__btn slider__btn--next" ref="next-slider">
          {next}
        </button>

        <button className="slider__btn slider__btn--down" ref="down-slider">
          Scroll or Click
        </button>
      </main>
    );
  }
}

export default Slider;
