import React, { Component } from "react";
import "./Search.scss";
import Header from "../../Components/Header/Header.js";
import Nav from "../../Components/Nav/Nav.js";
import { IoMdClose } from "react-icons/io";
import close from "../../Images/close.svg";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: true,
      nav: "close",
      keyword: "",
      search_data: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          search_data: res.search
        });
      });
  };

  //input.value받는 onChange 함수
  searchKeyword = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  //검색결과 구현 함수
  searchResult = (data, key) => {
    // console.log("배열", data, "검색내용", key);
    let searchResult = data.filter(card => card.includes(key));
    if (searchResult.length > 0) {
      return searchResult.map((keyword, i) => {
        return (
          <li className="list" key={i}>
            {keyword}
          </li>
        );
      });
    } else {
      return (
        <div className="no-result">"{key}"에 대한 검색 결과가 없습니다.</div>
      );
    }
  };

  // 네비게이션바 컨트롤
  handlerOver = () => {
    this.setState({
      nav: "open"
    });
  };

  handlerOut = () => {
    this.setState({
      nav: "close"
    });
  };

  // X 이미지 클릭하면 메인 이동
  goToMain = () => {
    this.props.history.push("/");
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
              {/* <IoMdClose className="delete-img" /> */}
              <img
                alt="메인으로 돌아가기"
                src={close}
                className="search-close-img"
                onClick={this.goToMain}
              ></img>
            </div>
          </div>

          {/* 검색결과 */}
          <div
            className="search-result"
            style={{ display: this.state.keyword ? "block" : "none" }}
          >
            {/* 검색결과 구현 */}
            <li>
              {this.searchResult(this.state.search_data, this.state.keyword)}
            </li>

            <section>
              <ul>
                <li className="product">
                  <div className="image">
                    <img
                      alt="셔츠이미지"
                      src="https://static.zara.net/photos///2020/V/0/1/p/2336/404/044/2/w/744/2336404044_2_3_1.jpg?ts=1582106916161"
                    ></img>
                  </div>
                  <div className="info">
                    <div className="new">NEW</div>
                    <div className="name">언밸런스 포폴린 셔츠</div>
                    <div className="price">59,000 원</div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>

        {/* 검색페이지 네비게이션바 */}
        <nav
          className="search-nav"
          style={{ display: this.state.keyword ? "block" : "none" }}
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
