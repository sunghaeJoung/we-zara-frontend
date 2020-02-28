import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <section>
        <div className="text-container">
          <h1 className="text-container__title">{this.props.title}</h1>
          <div className="text-container__subtitle">
            <p>{this.props.subtitle1}</p>
            <p>{this.props.subtitle2}</p>
            <p>{this.props.subtitle3}</p>
          </div>
          <div className="text-container__btn">view</div>
        </div>
      </section>
    );
  }
}

export default Section;
