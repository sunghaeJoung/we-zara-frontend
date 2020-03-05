import React, { Component } from 'react';
import './StoreResult.scss';

class StoreResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: '',
    };
  }

  handleClickBG = id => {
    this.setState({
      click: id,
    });
  };

  render() {
    const { content, stores } = this.props;
    const { click } = this.state;
    return (
      <div className="container">
        <div className="store-result">
          <div className="store-result-name">"{content}"에 가까운 매장</div>
          <ul>
            {/* 검색으로 나온 매장들 */}
            {stores.map(store => {
              return (
                <li className="store-list" key={store.id}>
                  <div
                    className="click"
                    id={store.id}
                    onClick={() => this.handleClickBG(store.id)}
                  >
                    <div className={click === store.id && 'click-fill'}></div>
                  </div>
                  <div className="store-info">
                    <div className="store-location">{content}</div>
                    <div className="store-name">{store.name}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default StoreResult;
