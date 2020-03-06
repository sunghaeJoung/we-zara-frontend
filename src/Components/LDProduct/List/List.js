import React, { Component } from 'react';
import './List.scss';

class LDPList extends Component {
  render() {
    const { id, img, name, price } = this.props;
    return (
      <div className="list-detail-product">
        <ul className="list-detail-product-ul">
          <li className="product-single" key={id}>
            <div className="product-image">
              <img alt="상품이미지" src={img}></img>
            </div>
            <div className="product-single-info">
              <div className="product-single-info-new">NEW</div>
              <div className="product-single-info-name">{name}</div>
              <div className="product-single-info-price">{price}</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default LDPList;
