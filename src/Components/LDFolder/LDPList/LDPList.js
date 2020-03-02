import React, { Component } from "react";
import "./LDPList.scss";

class LDPList extends Component {
  render() {
    return (
      <div className="list-detail-product">
        <ul className="list-detail-product-ul">
          <li className="product-single" key={this.props.id}>
            <div className="product-image">
              <img alt="상품이미지" src={this.props.img}></img>
            </div>
            <div className="product-single-info">
              <div className="product-single-info-new">{this.props.new}</div>
              <div className="product-single-info-name">{this.props.name}</div>
              <div className="product-single-info-price">
                {this.props.price}
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default LDPList;
