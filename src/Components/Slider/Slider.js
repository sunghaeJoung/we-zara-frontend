import React, { Component } from 'react';
import './Slider.scss';
import SliderContent from './SliderContent/SliderContent';
import * as Rx from 'rxjs-es';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hIndex: 1,
      vIndex: 0,
    };
  }

  componentDidMount() {
    const prevBtnClick$ = Rx.Observable.fromEvent(
      this.refs['prev-slider'],
      'click',
    ).map(() => -1);

    const nextBtnClick$ = Rx.Observable.fromEvent(
      this.refs['next-slider'],
      'click',
    ).map(() => 1);

    const downBtnClick$ = Rx.Observable.fromEvent(
      this.refs['down-slider'],
      'click',
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

    const vertical$ = Rx.Observable.fromEvent(window, 'wheel')
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
    let down;

    if (this.state.vIndex !== 4) {
      down = (
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
    }

    if (this.state.hIndex === 0) {
      prev = '';
      next = 'WOMAN >';
    } else if (this.state.hIndex === 1) {
      prev = 'MAN <';
      next = '> KID ';
    } else {
      prev = 'WOMAN <';
      next = '';
    }

    const transitionX = this.state.hIndex * -100;
    const transitionY = this.state.vIndex * -100;

    const styleX = {
      transition: 'all ease-out',
      width: '300vw',
      transitionDuration: '500ms',
      transform: `translateX(${transitionX}vw)`,
    };

    const styleY = {
      transition: 'all ease',
      height: '500vh',
      transitionDuration: '1400ms',
      transform: `translateY(${transitionY}vh)`,
    };

    const slides = this.props.data.map(obj => (
      <div style={styleY} className="slider__item">
        {obj.bg.map((bg, i) => (
          <SliderContent
            title={obj.text.title[i]}
            subtitle1={obj.text.subtitle1[i]}
            subtitle2={obj.text.subtitle2[i]}
            subtitle3={obj.text.subtitle3[i]}
            style={{ background: obj.bg[i] }}
          />
        ))}
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
          {down}
        </button>
      </main>
    );
  }
}

export default Slider;
