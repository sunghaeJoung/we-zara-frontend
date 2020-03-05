import React, { Component } from 'react';
import FilterShow from './FilterShow.js';
import './Filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: true,
    };
  }

  handlerFilter = () => {
    this.setState({
      filter: !this.state.filter,
    });
  };

  FilterList = (obj, min, max) => {
    const { filter } = this.props;
    if (filter.length != 0) {
      let arr = filter[obj];
      let result = [];

      for (let i = min; i < max; i++) {
        let id = arr[i].id;
        let name = arr[i].name;
        result.push(<div key={id}>{name}</div>);
      }
      return result;
    }
  };

  render() {
    const { option } = this.state;
    const { mode } = this.props;
    return (
      <div className={`filter ${mode ? 'hide-filter' : 'show-filter'}`}>
        <ul className="filter-hole">
          <li className="filter-head">
            사이즈
            {this.FilterList('sizes', 0, 3)}
            <div className={option ? 'view-hide' : 'view-more'}>
              {this.FilterList('sizes', 3, 8)}
            </div>
            {/* 필터 더보기 버튼 */}
            <FilterShow option={option} />
          </li>

          {/* ------------------------- */}

          <li className="filter-head">
            색상
            {this.FilterList('colors', 0, 3)}
            <div className={option ? 'view-hide' : 'view-more'}>
              {this.FilterList('colors', 3, 12)}
            </div>
            <FilterShow option={option} />
          </li>

          {/* ------------------------- */}

          <li className="filter-head">
            가격
            {this.FilterList('prices', 0, 3)}
            <div className={option ? 'view-hide' : 'view-more'}>
              {this.FilterList('prices', 3, 5)}
            </div>
            <FilterShow option={option} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
