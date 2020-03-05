import React, { Component } from 'react';
import './ListDetail.scss';
import LDHeader from '../../Components/LDFolder/LDHeader/LDHeader.js';
import Nav from '../../Components/Nav/Nav.js';
import Filter from '../../Components/Filter/Filter.js';
import LDProduct from '../../Components/LDFolder/LDProduct/LDProduct.js';

class ListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'close',
      mode: true,
      header_BG: true,
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

  // nav bar 컨트롤
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

  // 필터 btn 클릭하면 필터컴포 컨트롤
  handlerFilter = e => {
    this.setState({
      mode: !this.state.mode,
    });
  };

  // 헤더에 마우스올라가면 배경색 컨트롤
  headerBGFill = e => {
    this.setState({
      header_BG: false,
    });
  };

  headerBGEmpty = () => {
    this.setState({
      header_BG: true,
    });
  };

  render() {
    return (
      <>
        <LDHeader
          handlerOver={this.handlerOver}
          handlerFilter={this.handlerFilter}
          mode={this.state.mode}
          headerBGFill={this.headerBGFill}
          headerBGEmpty={this.headerBGEmpty}
          header_BG={this.state.header_BG}
        />
        <Nav handlerOut={this.handlerOut} nav={this.state.nav} />
        <Filter mode={this.state.mode} />
        <LDProduct onMouseLeave={this.headerBGEmpty} />
      </>
    );
  }
}

export default ListDetail;
