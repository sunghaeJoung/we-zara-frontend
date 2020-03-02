import React, { Component } from "react";
import "./Header.scss";
import menuIcon from "../../Images/Black/menu-icon.svg";
import logo from "../../Images/Black/logo.svg";
import cart from "../../Images/Black/cart.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="header">
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
        </div>
      </header>
    );
  }
}

export default Header;
