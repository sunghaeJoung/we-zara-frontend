import React, { Component } from 'react';

class PDAdd extends Component {
  render() {
    return (
      <div
        className="product-btn product-btn--black"
        onClick={this.props.onAddToCart}
      >
        추가하기
      </div>
    );
  }
}

export default PDAdd;
