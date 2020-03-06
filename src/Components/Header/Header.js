import React, { Component } from 'react';
import './Header.scss';
import menuIcon from '../../Images/Black/menu-icon.svg';
import logo from '../../Images/Black/logo.svg';
import cart from '../../Images/Black/cart.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { background, handlerOver, search_bar } = this.props;
    return (
      <header>
        <div className={`header ${background ? 'fill_BG' : ''}`}>
          <div className="header-left">
            <img
              className="menu-icon"
              src={menuIcon}
              alt=""
              onMouseEnter={handlerOver}
            ></img>
            <a
              href="./"
              title="Zara South Korea / 대한민국, 자라 홈페이지로 이동"
            >
              <img
                className="logo"
                style={this.props.style}
                src={logo}
                alt="자라"
              ></img>
            </a>
          </div>
          <a href="/search" className="search">
            <div className={`search-txt ${search_bar ? 'hide-search' : ''}`}>
              검색
            </div>
            <div
              className={`search-line ${search_bar ? 'hide-search' : ''}`}
            ></div>
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
