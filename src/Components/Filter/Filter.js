import React, { Component } from "react";
import "./Filter.scss";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: true
    };
  }

  handleFilter = e => {
    this.setState({
      filter: !this.state.filter
    });
  };

  render() {
    return (
      <div
        className={`filter ${this.props.mode ? "hide-filter" : "show-filter"}`}
      >
        <ul className="filter-hole">
          <li className="filter-head">
            사이즈
            <div>EU 32 (KR 23)</div>
            <div>EU 34 (KR 24)</div>
            <div>EU 44 (KR 29)</div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              XXS (KR 33)
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              XS (KR 44)
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              S (KR 55)
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              M (KR 66)
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              L (KR 77)
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              XL (KR 88)
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              XXL (KR 99)
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              XS-S
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              M-L
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              80
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              85
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              90
            </div>
            <div
              className={`view ${
                !this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              230
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              235
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              240
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              245
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              255
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              260
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              265
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              275
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handleFilter}>
              <div
                className={`view ${
                  this.state.filter ? "view-more" : "view-hide"
                }`}
              >
                + VIEW MORE
              </div>
              <div
                className={`view ${
                  this.state.filter ? "view-hide" : "view-more"
                }`}
              >
                - VIEW LESS
              </div>
            </div>
          </li>
          <li className="filter-head">
            색상
            <div>갈색</div>
            <div>검정</div>
            <div>금속</div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              기타
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              노랑
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handleFilter}>
              <div
                className={`view ${
                  this.state.filter ? "view-more" : "view-hide"
                }`}
              >
                + VIEW MORE
              </div>
              <div
                className={`view ${
                  this.state.filter ? "view-hide" : "view-more"
                }`}
              >
                - VIEW LESS
              </div>
            </div>
          </li>
          <li className="filter-head">
            컬렉션
            <div>BASIC</div>
            <div>TRF</div>
            <div>WOMAN</div>
          </li>
          <li className="filter-head">
            아이템
            <div>가방</div>
            <div>구두</div>
            <div>니트</div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              드레스
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              바지
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handleFilter}>
              <div
                className={`view ${
                  this.state.filter ? "view-more" : "view-hide"
                }`}
              >
                + VIEW MORE
              </div>
              <div
                className={`view ${
                  this.state.filter ? "view-hide" : "view-more"
                }`}
              >
                - VIEW LESS
              </div>
            </div>
          </li>
          <li className="filter-head">
            가격
            <div>10,000원</div>
            <div>40,000원</div>
            <div>70,000원</div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              100,000원
            </div>
            <div
              className={`view ${
                this.state.filter ? "view-hide" : "view-more"
              }`}
            >
              130,000원
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handleFilter}>
              <div
                className={`view ${
                  this.state.filter ? "view-more" : "view-hide"
                }`}
              >
                + VIEW MORE
              </div>
              <div
                className={`view ${
                  this.state.filter ? "view-hide" : "view-more"
                }`}
              >
                - VIEW LESS
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
