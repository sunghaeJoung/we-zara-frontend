import React, { Component } from "react";
import "./LDPList.scss";

class LDPList2 extends Component {
  render() {
    console.log("제품 props 두개", this.props);
    return (
      <div className="list-detail-product width">
        <ul className="list-detail-product-ul">
          <li className="product-width" key={this.props.id}>
            <div className="product-image">
              <img src={this.props.img}></img>
            </div>
            <div className="product-info">
              <div className="product-info-new">{this.props.new}</div>
              <div className="product-info-name">{this.props.name}</div>
              <div className="product-info-price">{this.props.price}</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default LDPList2;
