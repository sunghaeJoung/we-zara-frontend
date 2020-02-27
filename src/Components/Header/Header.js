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
              onMouseEnter={this.props.handlerOver}
            ></img>
            <a
              href=""
              title="Zara South Korea / 대한민국, 자라 홈페이지로 이동"
            >
              <img className="logo" src={logo}></img>
            </a>
          </div>
          <a className="search">
            <div className="search-txt">검색</div>
            <div className="search-line"></div>
          </a>
          <div className="header-right">
            <a>로그인</a>
            <a>도움말</a>
            <a className="cart">
              <img src={cart}></img>
              <span>0</span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
