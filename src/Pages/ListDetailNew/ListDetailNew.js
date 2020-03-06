import React, { Component } from 'react';
import './ListDetailNew.scss';
import LDHeader from '../../Components/LDProduct/LDHeader/LDHeader.js';
import Nav from '../../Components/Nav/Nav.js';
import Filter from '../../Components/Filter/Filter.js';
import LDProduct from '../../Components/LDProduct/LDProduct.js';

class ListDetailNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'close',
      mode: true,
      header_BG: true,
      marketing: [],
      product: [],
      filter: [],
    };
  }

  // //스크롤로 필터컴포 컨트롤
  // componentDidMount = () => {
  //   window.addEventListener("scroll", this.handlerScroll, true);
  // };

  // componentWillUnmount = () => {
  //   window.addEventListener("scroll", this.handlerScroll, false);
  // };

  // handlerScroll = () => {
  //   if (this.state.mode === false) {
  //     this.setState({
  //       mode: true
  //     });
  //   }
  // };

  componentDidMount = () => {
    fetch('http://10.58.2.227:8000/clothes/new/1')
      .then(res => res.json())
      .then(res => {
        this.setState({
          marketing: res.marketing,
          product: res.new,
          filter: res.filter_list,
        });
      });
  };

  // nav bar 컨트롤
  handlerNav = str => {
    this.setState({
      nav: str,
    });
  };

  // 필터 btn 클릭하면 필터컴포 컨트롤
  handlerFilter = e => {
    this.setState({
      mode: !this.state.mode,
    });
  };

  // 헤더에 마우스올라가면 배경색 컨트롤
  handlerHeaderBG = str => {
    this.setState({
      header_BG: str,
    });
  };

  render() {
    const { mode, header_BG, nav, marketing, product, filter } = this.state;
    return (
      <>
        <LDHeader
          handlerOver={() => this.handlerNav('open')}
          handlerFilter={this.handlerFilter}
          mode={mode}
          headerBGFill={() => this.handlerHeaderBG(false)}
          headerBGEmpty={() => this.handlerHeaderBG(true)}
          header_BG={header_BG}
        />
        <Nav handlerOut={() => this.handlerNav('close')} nav={nav} />
        <Filter mode={mode} filter={filter} />
        <LDProduct marketing={marketing} product={product} />
      </>
    );
  }
}

export default ListDetailNew;
