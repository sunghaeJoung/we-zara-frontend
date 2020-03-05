import React, { Component } from 'react';
import './SearchResult.scss';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_mode: false,
    };
  }

  //결과리스트 구현 함수
  searchResult = () => {
    let result = this.props.search_data.filter(card =>
      card.includes(this.props.keyword),
    );
    if (result.length > 0) {
      return result.map((keyword, i) => {
        return (
          <li>
            <li className="list" key={i}>
              {keyword}
            </li>
          </li>
        );
      });
    } else {
      return (
        <div className="no-result">
          "{this.props.keyword}"에 대한 검색 결과가 없습니다.
        </div>
      );
    }
  };

  //결과제품 구현 함수
  searchProduct = data =>
    data.map(card => {
      return (
        <li className="product" key={card.id}>
          <div className="image">
            <img alt="셔츠이미지" src={card.img}></img>
          </div>
          <div className="info">
            <div className="new">{card.new}</div>
            <div className="name">{card.name}</div>
            <div className="price">{card.price}</div>
          </div>
        </li>
      );
    });

  render() {
    return (
      <div
        className="search-result"
        style={{ display: this.props.keyword ? 'block' : 'none' }}
      >
        {/* 결과리스트 */}
        {this.searchResult()}
        <section>
          {/* 결과제품 */}
          {this.state.product_mode && (
            <ul>{this.searchProduct(this.props.product_data)}</ul>
          )}
        </section>
      </div>
    );
  }
}

export default SearchResult;
