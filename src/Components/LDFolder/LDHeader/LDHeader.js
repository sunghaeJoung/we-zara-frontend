import React, { Component } from "react";
import "./LDHeader.scss";
import menuIcon from "../../../Images/Black/menu-icon.svg";
import logo from "../../../Images/Black/logo.svg";
import cart from "../../../Images/Black/cart.svg";

class LDHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div
          className={`header ${this.props.header_BG ? "empty_BG" : "fill_BG"}`}
          onMouseEnter={this.props.headerBGFill}
          onMouseLeave={this.props.headerBGEmpty}
        >
          <div className="header-left">
            <img
              className="menu-icon"
              src={menuIcon}
              alt=""
              onMouseEnter={this.props.handlerOver}
            ></img>
            <a
              href="자라"
              title="Zara South Korea / 대한민국, 자라 홈페이지로 이동"
            >
              <img className="logo" src={logo} alt=""></img>
            </a>
          </div>
          <a href="검색" className="search">
            <div className="search-txt">검색</div>
            <div className="search-line"></div>
          </a>
          <div className="header-right">
            <a href="로그인">로그인</a>
            <a href="도움말">도움말</a>
            <a href="장바구니" className="cart">
              <img src={cart} alt=""></img>
              <span>0</span>
            </a>
          </div>

          {/* 헤더 필터 */}
          <div
            className={`top-option ${
              this.props.mode ? "top-option-hide" : "top-option-show"
            }`}
          >
            <div className="top-option__left">
              <span>보기</span>
              <span className="two">2</span>
              <span className="four">4</span>
              <span>|</span>
            </div>
            <div className="top-option__right">
              <div className="filter-btn" onClick={this.props.handlerFilter}>
                <span
                  className={
                    this.props.mode ? "filter-btn-show" : "filter-btn-hide"
                  }
                >
                  + FILTERS
                </span>
                <span
                  className={
                    this.props.mode ? "filter-btn-hide" : "filter-btn-show"
                  }
                >
                  - FILTERS
                </span>
              </div>
              <span className="delete">삭제</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default LDHeader;
