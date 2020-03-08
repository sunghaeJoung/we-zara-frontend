import React, { Component } from 'react';
import './ProductDetail.scss';
import PDContent from '../../Components/PDFolder/PDContent/PDContent';
import Modal from '../../Components/Modal/Modal';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'close',
      images: [],
      title: '',
      price: '',
      description: '',
    };
  }

  componentDidMount = () => {
    fetch('http://13.125.199.45:8000/clothes/details/150/11')
      .then(res => res.json())
      .then(res => {
        this.setState({
          images: res.clothes_details.images,
          title: res.clothes_details.clothes.name,
          price: res.clothes_details.price,
          description: res.clothes_details.description,
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
        <PDContent
          data={this.state.images}
          title={this.state.title}
          price={this.state.price}
          description={this.state.description}
        />
      </>
    );
  }
}

export default ProductDetail;
