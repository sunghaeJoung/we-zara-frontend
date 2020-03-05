import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: true,
    };
  }

  handlerFilter = e => {
    console.log(e.taeget);
    this.setState({
      filter: !this.state.filter,
    });
  };

  render() {
    return (
      <div
        className={`filter ${this.props.mode ? 'hide-filter' : 'show-filter'}`}
      >
        <ul className="filter-hole">
          <li className="filter-head">
            사이즈
            <div>EU 32 (KR 23)</div>
            <div>EU 34 (KR 24)</div>
            <div>EU 44 (KR 29)</div>
            <div className={this.state.filter ? 'view-hide' : 'view-more'}>
              <div>XXS (KR 33)</div>
              <div>XS (KR 44)</div>
              <div>S (KR 55)</div>
              <div>M (KR 66)</div>
              <div>L (KR 77)</div>
              <div>XL (KR 88)</div>
              <div>XXL (KR 99)</div>
              <div>XS-S</div>
              <div>M-L</div>
              <div>80</div>
              <div>85</div>
              <div>90</div>
              <div>230</div>
              <div>235</div>
              <div>240</div>
              <div>245</div>
              <div>255</div>
              <div>260</div>
              <div>265</div>
              <div>275</div>
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handlerFilter}>
              <div className={this.state.filter ? 'view-more' : 'view-hide'}>
                + VIEW MORE
              </div>
              <div className={this.state.filter ? 'view-hide' : 'view-more'}>
                - VIEW LESS
              </div>
            </div>
          </li>
          <li className="filter-head">
            색상
            <div>갈색</div>
            <div>검정</div>
            <div>금속</div>
            <div className={this.state.filter ? 'view-hide' : 'view-more'}>
              <div>기타</div>
              <div>노랑</div>
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handleFilter}>
              <div className={this.state.filter ? 'view-more' : 'view-hide'}>
                + VIEW MORE
              </div>
              <div className={this.state.filter ? 'view-hide' : 'view-more'}>
                - VIEW LESS
              </div>
            </div>
          </li>
          <li className="filter-head">
            컬렉션
            <div>BASIC</div>
            <div>TRF</div>
            <div>WOMAN</div>
          </li>
          <li className="filter-head">
            아이템
            <div>가방</div>
            <div>구두</div>
            <div>니트</div>
            <div className={this.state.filter ? 'view-hide' : 'view-more'}>
              <div>드레스</div>
              <div>바지</div>
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handleFilter}>
              <div className={this.state.filter ? 'view-more' : 'view-hide'}>
                + VIEW MORE
              </div>
              <div className={this.state.filter ? 'view-hide' : 'view-more'}>
                - VIEW LESS
              </div>
            </div>
          </li>
          <li className="filter-head">
            가격
            <div>10,000원</div>
            <div>40,000원</div>
            <div>70,000원</div>
            <div className={this.state.filter ? 'view-hide' : 'view-more'}>
              <div>100,000원</div>
              <div>130,000원</div>
            </div>
            {/* 필터 더보기 버튼 */}
            <div className="view-btn" onClick={this.handleFilter}>
              <div className={this.state.filter ? 'view-more' : 'view-hide'}>
                + VIEW MORE
              </div>
              <div
                className={`view ${
                  this.state.filter ? 'view-hide' : 'view-more'
                }`}
              >
                - VIEW LESS
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
