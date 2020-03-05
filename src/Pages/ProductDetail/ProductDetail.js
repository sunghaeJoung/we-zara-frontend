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
      productDetailData: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/data2.json')
      .then(res => res.json())
      .then(res => {
        console.log(10);
        this.setState({
          productDetailData: res.product_detail,
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
        <PDContent data={this.state.productDetailData} />
      </>
    );
  }
}

export default ProductDetail;
