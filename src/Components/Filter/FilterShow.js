import React, { Component } from 'react';

class FilterShow extends Component {
  render() {
    const { option } = this.props;
    return (
      <div className="view-btn" onClick={this.handleFilter}>
        <div className={option ? 'view-more' : 'view-hide'}>+ VIEW MORE</div>
        <div className={option ? 'view-hide' : 'view-more'}>- VIEW LESS</div>
      </div>
    );
  }
}

export default FilterShow;
