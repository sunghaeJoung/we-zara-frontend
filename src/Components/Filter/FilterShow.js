import React, { Component } from 'react';

class FilterShow extends Component {
  render() {
    const { option, handlerFilter } = this.props;
    return (
      <div className="view-btn" onClick={handlerFilter}>
        <div className={option ? 'view-more' : 'view-hide'}>+ VIEW MORE</div>
        <div className={option ? 'view-hide' : 'view-more'}>- VIEW LESS</div>
      </div>
    );
  }
}

export default FilterShow;
