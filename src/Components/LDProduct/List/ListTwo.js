import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './List.scss';

class ListTwo extends Component {
  goToProductDetail = () => {
    this.props.history.push('/product-detail');
  };

  render() {
    const { id, img, name, price } = this.props;
    return (
      <div
        className="list-detail-product width"
        onClick={() => this.goToProductDetail()}
      >
        <ul className="list-detail-product-ul">
          <li className="product-width" key={id}>
            <div className="product-image">
              <img alt="상품이미지" src={img}></img>
            </div>
            <div className="product-info">
              <div className="product-info-new">NEW</div>
              <div className="product-info-name">{name}</div>
              <div className="product-info-price">{price}</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(ListTwo);
