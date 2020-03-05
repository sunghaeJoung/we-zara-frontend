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
  searchResult = list => {
    if (list != 0) {
      return list.map(keyword => {
        return (
          <li>
            <li className="list" key={keyword}>
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

  // //결과제품 구현 함수
  searchProduct = product =>
    product.map(card => {
      return (
        <li className="product" key={card.name}>
          <div className="image">
            <img alt="제품이미지" src={card.image}></img>
          </div>
          <div className="info">
            <div className="new">NEW</div>
            <div className="name">{card.name}</div>
            <div className="price">{card.price}</div>
          </div>
        </li>
      );
    });

  render() {
    const { search_data, keyword } = this.props;
    console.log(search_data.results);
    return (
      <div
        className="search-result"
        style={{ display: keyword ? 'block' : 'none' }}
      >
        {/* 결과리스트 */}
        {search_data.list && this.searchResult(search_data.list)}

        {/* 결과제품 */}
        <section>
          {
            (this.state.product_mode,
            search_data.list && (
              <ul>
                {search_data.results.map(card => {
                  return (
                    <li className="product" key={card.id}>
                      <div className="image">
                        <img alt="셔츠이미지" src={card.image}></img>
                      </div>
                      <div className="info">
                        <div className="new">NEW</div>
                        <div className="name">{card.name}</div>
                        <div className="price">{card.price}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ))
          }
        </section>
      </div>
    );
  }
}

export default SearchResult;
