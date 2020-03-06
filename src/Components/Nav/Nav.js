import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ListData from './List-data.js';
import InfoData from './Info-Data.js';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigList: false,
      smallList: true,
      infoList: false,
    };
  }

  goToListDetailNew = () => {
    this.props.history.push(`/list-new?id=1`);
  };

  goToListDetail = id => {
    this.props.history.push(`/list?id=${id}`);
  };

  goToStore = () => {
    this.props.history.push('/store');
  };

  showBigList = () => {
    this.setState({
      bigList: !this.state.bigList,
    });
  };

  showSamllList = () => {
    this.setState({
      smallList: !this.state.smallList,
    });
  };

  showInfoList = () => {
    this.setState({
      infoList: !this.state.infoList,
    });
  };

  render() {
    const { bigList, smallList, infoList } = this.state;
    const { nav, handlerOut } = this.props;
    return (
      <div
        className={`nav-bar ${nav === 'open' ? 'showNav' : 'hideNav'}`}
        onMouseLeave={handlerOut}
        style={{ zIndex: 100 }}
      >
        <nav>
          <ul className="list">
            <li>
              <span className="list-name" onClick={this.showBigList}>
                WOMAN
              </span>
              <ul className={`list-woman ${bigList ? 'showList' : 'hideList'}`}>
                <li>
                  <div onClick={this.goToListDetailNew}>이번 주 신상품</div>
                </li>
                <li></li>
                <li className="collection">
                  <span
                    className={smallList ? 'txtBold' : ''}
                    onClick={this.showSamllList}
                  >
                    COLLECTION
                  </span>
                  <ul
                    className={`list-collection ${
                      smallList ? 'showList' : 'hideList'
                    }`}
                  >
                    <li className="bestseller">베스트셀러</li>
                    {ListData.map(list => {
                      return (
                        <li
                          key={list.id}
                          id={list.id}
                          onClick={() => this.goToListDetail(list.id)}
                        >
                          {list.title}
                        </li>
                      );
                    })}
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
            <li className="info" onClick={this.showInfoList}>
              +안내
              <div
                className={`info-list ${infoList ? 'showList' : 'hideList'}`}
              >
                {InfoData.map((list, idx) => {
                  return (
                    <div key={idx} onClick={this.goToStore}>
                      {list}
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
