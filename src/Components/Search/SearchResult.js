import React, { Component } from 'react';
import './SearchResult.scss';

class SearchResult extends Component {
  render() {
    return (
      <li className="product" key={this.props.id}>
        <div className="image">
          <img alt="셔츠이미지" src={this.props.img}></img>
        </div>
        <div className="info">
          <div className="new">{this.props.new}</div>
          <div className="name">{this.props.name}</div>
          <div className="price">{this.props.price}</div>
        </div>
      </li>
    );
  }
}

export default SearchResult;
