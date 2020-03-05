import React, { Component } from 'react';
import './Marketing.scss';

class LDPMarketing extends Component {
  render() {
    const { img } = this.props;
    return (
      <li className="marketing" key={img}>
        <div className="image">
          <img src={img}></img>
        </div>
      </li>
    );
  }
}

export default LDPMarketing;
