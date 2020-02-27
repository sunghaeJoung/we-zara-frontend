import React from "react";

import ReactSnapScroll from "react-snap-scroll";

const App = () => (
  <ReactSnapScroll transition="move-top-bottom">
    <div style={{ height: "100vh", background: "tomato" }} />
    <div style={{ height: "100vh", background: "royalblue" }} />
    <div style={{ height: "100vh", background: "#000" }} />
  </ReactSnapScroll>
);

export default App;

// import React from "react";
// import styles from "./Slider.module.scss";

// const getPercentage = (current, max) => (100 * current) / max;
// const getValue = (percentage, max) => (max / 100) * percentage;
// const getLeft = percentage => `calc(${percentage}% - 5px)`;

// const Slider = ({ initial, max, onChange }) => {
//   const initialPercentage = getPercentage(initial, max);

//   const sliderRef = React.useRef();
//   const thumbRef = React.useRef();
//   const diff = React.useRef();

//   const currentRef = React.useRef();

//   const handleMouseMove = event => {
//     let newX =
//       event.clientX -
//       diff.current -
//       sliderRef.current.getBoundingClientRect().left;

//     const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
//     const start = 0;
//     if (newX < start) {
//       newX = 0;
//     }
//     if (newX > end) {
//       newX = end;
//     }

//     const newPercentage = getPercentage(newX, end);
//     const newValue = getValue(newPercentage, max);
//     thumbRef.current.style.left = getLeft(newPercentage);
//     currentRef.current.textContent = newValue;

//     onChange(newValue);
//   };

//   const handleMouseUp = () => {
//     document.removeEventListener("mouseup", handleMouseUp);
//     document.removeEventListener("mousemove", handleMouseMove);
//   };
//   const handleMouseDown = event => {
//     diff.current =
//       event.clientX - thumbRef.current.getBoundingClientRect().left;

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   };

//   return (
//     <>
//       <div className={styles.sliderHeader}>
//         <strong ref={currentRef}>{(initial)}</strong>
//         &nbsp;/&nbsp;
//         {(max)}
//       </div>
//       <div className={styles.styledSlider} ref={sliderRef}>
//         <div
//           style={{ left: getLeft(initialPercentage) }}
//           className={styles.styledThumb}
//           ref={thumbRef}
//           onMouseDown={handleMouseDown}
//         />
//       </div>
//     </>
//   );
// };

// const App = () => (
//   <div>
//     <Slider inital={10} max={25} onChange={value => console.log(value)} />
//   </div>
// );

// export default App;

/* <section className="main__section" style={{ background: item.bg[1] }}>
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
        </section> */
