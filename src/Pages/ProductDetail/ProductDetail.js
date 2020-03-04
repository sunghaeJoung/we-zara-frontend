import React, { Component } from 'react';
import './ProductDetail.scss';
import PDContent from '../../Components/PDFolder/PDContent/PDContent';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'close',
    };
  }

  handlerOver = () => {
    this.setState({
      nav: 'open',
    });
  };

  handlerOut = () => {
    this.setState({
      nav: 'close',
    });
  };

  render() {
    return (
      <>
        <PDContent />
      </>
    );
  }
}

export default ProductDetail;
