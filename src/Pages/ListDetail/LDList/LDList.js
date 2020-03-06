import React, { Component } from 'react';

import List from '../../../Components/LDProduct/List/List.js';
import ListTwo from '../../../Components/LDProduct/List/ListTwo.js';
import '../ListDetail.scss';
import './LDList.scss';

class LDList extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="list-detail-list">
        {product.map(list => {
          return (
            <ListTwo
              id={list.id}
              img={list.image}
              name={list.name}
              price={list.price}
            />
          );
        })}
      </div>
    );
  }
}

export default LDList;
