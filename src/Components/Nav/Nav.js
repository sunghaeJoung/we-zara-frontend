import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigList: false,
      smallList: true
    };
  }

  showBigList = () => {
    this.setState({
      bigList: !this.state.bigList
    });
  };

  showSamllList = () => {
    this.setState({
      smallList: !this.state.smallList
    });
  };

  render() {
    return (
      <div
        className={`nav-bar ${
          this.props.nav === "open" ? "showNav" : "hideNav"
        }`}
        onMouseLeave={this.props.handlerOut}
      >
        <nav>
          <ul className="list">
            <li>
              <span className="list-name" onClick={this.showBigList}>
                WOMAN
              </span>
              <ul
                className={`list-woman ${
                  this.state.bigList ? "showList" : "hideList"
                }`}
              >
                <li>
                  <span>이번 주 신상품</span>
                </li>
                <li></li>
                <li className="collection">
                  <span
                    className={this.state.smallList ? "txtBold" : ""}
                    onClick={this.showSamllList}
                  >
                    COLLECTION
                  </span>
                  <ul
                    className={`list-collection ${
                      this.state.smallList ? "showList" : "hideList"
                    }`}
                  >
                    <li className="bestseller">베스트셀러</li>
                    <li>아우터</li>
                    <li>자켓 | 패딩</li>
                    <li>블레이저</li>
                    <li>원피스 | 점프수트</li>
                    <li>셔츠 | 탑</li>
                    <li>티셔츠</li>
                    <li>니트</li>
                    <li>팬츠</li>
                    <li>진</li>
                    <li>스커트 | 쇼츠</li>
                    <li>맨투맨</li>
                    <li>슈즈</li>
                    <li>백</li>
                    <li>악세사리</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="list-name">MAN</span>
            </li>
            <li>
              <span className="list-name">KIDS</span>
            </li>
            <li>
              <span className="list-name">SHOES & BAGS</span>
            </li>
            <li></li>
            <li className="join-life">
              <span className="list-name">JOIN LIFE</span>
            </li>
            <li className="info">+안내</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
