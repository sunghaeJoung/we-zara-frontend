import React, { Component } from 'react';
import './Search.scss';
import Header from '../../Components/Header/Header.js';
import Nav from '../../Components/Nav/Nav.js';
import SearchResult from './SearchResult.js';
import close from '../../Images/close.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: true,
      nav: 'close',
      keyword: '',
      search_data: [],
      product_data: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          search_data: res.search,
          product_data: res.product_list,
        });
      });
  };

  //input.value받는 onChange 함수
  searchKeyword = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  // 네비게이션바 컨트롤
  handlerOver = () => {
    this.setState({
      nav: 'open',
    });
  };

  handlerOut = () => {
    this.setState({
      nav: 'close',
    });
  };

  // X 이미지 클릭하면 메인 이동
  goToMain = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="search-page">
        <Header
          handlerOver={this.handlerOver}
          background={this.state.background}
        />
        <Nav handlerOut={this.handlerOut} nav={this.state.nav} />

        <section>
          {/* 검색창 */}
          <div className="search">
            <div className="search-input">
              <input type="text" onChange={this.searchKeyword}></input>
              <img
                alt="자라홈"
                src={close}
                className="search-close-img"
                onClick={this.goToMain}
              ></img>
            </div>
          </div>

          {/* 검색 결과 컴포넌트 */}
          <SearchResult
            keyword={this.state.keyword}
            search_data={this.state.search_data}
            product_data={this.state.product_data}
          />
        </section>

        {/* 검색페이지 네비게이션바 */}
        <nav
          className="search-nav"
          style={{ display: this.state.keyword ? 'block' : 'none' }}
        >
          <ul>
            <li className="search-nav-list">
              <span className="text">WOMAN</span>
              <span className="number">691</span>
            </li>
            <li className="search-nav-list">
              <span className="text">MAN</span>
              <span className="number">300</span>
            </li>
            <li className="search-nav-list">
              <span className="text">KIDS</span>
              <span className="number">194</span>
            </li>
            <li className="search-nav-list">
              <span className="text">JOIN LIFE</span>
              <span className="number">18</span>
            </li>
            <li className="search-nav-list list-all">
              <span className="text">모두</span>
              <span className="number">1185</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Search;
