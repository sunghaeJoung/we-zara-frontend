import React, { Component } from "react";
import "./LDSection.scss";
import Filter from "../../Filter/Filter.js";
import LDProduct from "../LDProduct/LDProduct.js";

class LDSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true
    };
  }

  handleFilter = () => {
    this.setState({
      mode: !this.state.mode
    });
  };

  render() {
    return (
      <section className="list-detail-section">
        <div className="LDSection">
          {/* 보기 / 필터 */}
          <div
            className={`top-option ${
              this.state.mode ? "top-option-hide" : "top-option-show"
            }`}
          >
            <div className="top-option__left">
              <span>보기</span>
              <span className="two">2</span>
              <span className="four">4</span>
              <span>|</span>
            </div>
            <div className="top-option__right">
              <div className="filter-btn" onClick={this.handleFilter}>
                <span
                  className={
                    this.state.mode ? "filter-btn-show" : "filter-btn-hide"
                  }
                >
                  + FILTERS
                </span>
                <span
                  className={
                    this.state.mode ? "filter-btn-hide" : "filter-btn-show"
                  }
                >
                  - FILTERS
                </span>
              </div>
              <span className="delete">삭제</span>
            </div>
          </div>

          <Filter mode={this.state.mode} />
          <LDProduct />
        </div>
      </section>
    );
  }
}

export default LDSection;
