import React, { Component } from 'react';
import './Search.scss';
import Header from '../../Components/Header/Header.js';
import Nav from '../../Components/Nav/Nav.js';
import SearchResult from './SearchResult/SearchResult.js';
import close from '../../Images/close.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: true,
      nav: 'close',
      keyword: '',
      search_data: [],
      search_bar: true,
    };
  }

  //input.value받는 onKeyPress 함수
  searchKeyword = e => {
    if (window.event.keyCode === 13) {
      this.setState(
        {
          keyword: e.target.value,
        },
        () => {
          fetch(
            `http://13.125.199.45:8000/clothes/search?keyword=${this.state.keyword}`,
          )
            .then(res => res.json())
            .then(res => {
              // console.log(res.list);
              this.setState({
                search_data: res,
              });
            });
        },
      );
    }
  };

  // nav bar 컨트롤
  handlerNav = str => {
    this.setState({
      nav: str,
    });
  };

  // X 이미지 클릭하면 메인 이동
  goToMain = () => {
    this.props.history.push('/');
  };

  render() {
    const { background, search_bar, keyword, search_data, nav } = this.state;

    return (
      <div className="search-page">
        <Header
          handlerOver={() => this.handlerNav('open')}
          background={background}
          search_bar={search_bar}
        />
        <Nav handlerOut={() => this.handlerNav('close')} nav={nav} />

        <section>
          {/* 검색창 */}
          <div className="search">
            <div className="search-input">
              <input type="text" onKeyPress={this.searchKeyword}></input>
              <img
                alt="자라홈"
                src={close}
                className="search-close-img"
                onClick={this.goToMain}
              ></img>
            </div>
          </div>

          {/* 검색 결과 컴포넌트 */}
          <SearchResult keyword={keyword} search_data={search_data} />
        </section>

        {/* 검색페이지 네비게이션바 */}
        <nav
          className="search-nav"
          style={{ display: keyword ? 'block' : 'none' }}
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
