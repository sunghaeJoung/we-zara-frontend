import React, { Component } from 'react';
import FilterShow from './FilterShow.js';
import './Filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: true,
      option2: true,
      option3: true,
    };
  }

  controlProduct = (id, name) => {
    console.log(id, name);

    const obj = {
      [name]: id,
    };

    fetch('http://10.58.2.227:8000/clothes/1/3', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  //필터 각 항목별로 더보기
  handlerFilter1 = () => {
    this.setState({
      option1: !this.state.option1,
    });
  };

  handlerFilter2 = () => {
    this.setState({
      option2: !this.state.option2,
    });
  };

  handlerFilter3 = () => {
    this.setState({
      option3: !this.state.option3,
    });
  };

  FilterList = (obj, min, max) => {
    const { filter } = this.props;
    // console.log('test: ', filter);
    let arr = filter[obj];
    let result = [];

    for (let i = min; i < max; i++) {
      let id = arr[i].id;
      let name = arr[i].name;
      result.push(
        <div key={id} onClick={() => this.controlProduct(id, obj)}>
          {name}
        </div>,
      );
    }
    return result;
  };

  render() {
    const { option1, option2, option3 } = this.state;
    const { mode, filter } = this.props;

    return (
      <div className={`filter ${mode ? 'hide-filter' : 'show-filter'}`}>
        <ul className="filter-hole">
          <li className="filter-head">
            사이즈
            {filter.length != 0 && this.FilterList('sizes', 0, 3)}
            <div className={option1 ? 'view-hide' : 'view-more'}>
              {filter.length != 0 &&
                this.FilterList('sizes', 3, filter.sizes.length)}
            </div>
            {/* 필터 더보기 버튼 */}
            <FilterShow option={option1} handlerFilter={this.handlerFilter1} />
          </li>

          {/* ------------------------- */}

          <li className="filter-head">
            색상
            {filter.length != 0 && this.FilterList('colors', 0, 3)}
            <div className={option2 ? 'view-hide' : 'view-more'}>
              {filter.length != 0 &&
                this.FilterList('colors', 3, filter.colors.length)}
            </div>
            <FilterShow option={option2} handlerFilter={this.handlerFilter2} />
          </li>

          {/* ------------------------- */}

          <li className="filter-head">
            가격
            {filter.length != 0 && this.FilterList('prices', 0, 3)}
            <div className={option3 ? 'view-hide' : 'view-more'}>
              {filter.length != 0 &&
                this.FilterList('prices', 3, filter.prices.length)}
            </div>
            <FilterShow option={option3} handlerFilter={this.handlerFilter3} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
