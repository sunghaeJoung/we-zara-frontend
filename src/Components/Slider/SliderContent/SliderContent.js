import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SliderContent.scss';

class SliderContent extends Component {
  render() {
    return (
      <Link to="/product-detail">
        <section className="main__section" style={this.props.style}>
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
      </Link>
    );
  }
}

export default SliderContent;
