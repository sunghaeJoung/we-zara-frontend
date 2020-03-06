import React, { Component } from 'react';
import './ListDetail.scss';
import LDHeader from '../../Components/LDProduct/LDHeader/LDHeader.js';
import Nav from '../../Components/Nav/Nav.js';
import Filter from '../../Components/Filter/Filter.js';
import LDList from './LDList/LDList.js';

class ListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'close',
      mode: true,
      header_BG: true,
      product: [],
      filter: [],
    };
  }

  componentDidMount = () => {
    const queryId = this.props.location.search.split('=')[1];
    // console.log('queryId ', queryId);

    fetch(`http://10.58.2.227:8000/clothes/1/${queryId}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res.clothes_list,
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
  handlerFilter = () => {
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
    const { mode, header_BG, nav, filter, product } = this.state;
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
        <LDList product={product} />
      </>
    );
  }
}

export default ListDetail;
