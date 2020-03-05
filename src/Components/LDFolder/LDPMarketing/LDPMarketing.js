import React, { Component } from 'react';
import './LDPMarketing.scss';

class LDPMarketing extends Component {
  render() {
    return (
      <li className="marketing" key={this.props.img}>
        <div className="image">
          <img src={this.props.img}></img>
        </div>
      </li>
    );
  }
}

export default LDPMarketing;
