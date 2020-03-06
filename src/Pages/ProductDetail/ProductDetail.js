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
      productImages: [],
    };
  }

  componentDidMount = () => {
    fetch('http://10.58.2.227:8000/clothes/details/150/11')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productImages: res.clothes_details.images,
        });
      });
  };

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
        <Header handlerOver={this.handlerOver} style={{ display: 'none' }} />
        <Nav handlerOut={this.handlerOut} nav={this.state.nav} />
        <PDContent data={this.state.productImages} />
      </>
    );
  }
}

export default ProductDetail;
