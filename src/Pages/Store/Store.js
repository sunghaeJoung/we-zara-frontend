import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js';
import Nav from '../../Components/Nav/Nav.js';
import StoreData from './Store-data.js';
import StoreResult from './StoreResult/StoreResult.js';
import Map from './Map/Map.js';
import './Store.scss';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: true,
      nav: 'close',
      label: 'big',
      check: false,
      content: '',
      longitude: '',
      latitude: '',
      stores: [],
      result_show: true,
    };
  }

  // input창 입력 컨트롤
  handleInput = e => {
    this.setState({
      content: e.target.value,
    });
  };

  // 클릭하면 키워드 백으로 전송
  sendContent = () => {
    fetch('http://13.125.199.45:8000/store-info', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        province: this.state.content,
        longitude: '333',
        latitude: '333',
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          stores: res.all_data,
          result_show: !this.state.result_show,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // check 표시 컨트롤
  handleCheck = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  // label 글씨 컨트롤
  handleLabelMini = () => {
    this.setState({
      label: 'mini',
    });
  };

  // 네이게이션바 컨트롤
  handlerNav = str => {
    this.setState({
      nav: str,
    });
  };

  render() {
    const selectCountry = StoreData.map(country => {
      return <option>{country}</option>;
    });

    const { background, nav, check, stores, content } = this.state;

    return (
      <div className="store-page">
        <Header
          handlerOver={() => this.handlerNav('open')}
          background={background}
        />
        <Nav handlerOut={() => this.handlerNav('close')} nav={nav} />
        <section className="store">
          <div className="store-search">
            <div className="top-text">매장 검색</div>
            <p>
              위치(예: 우편번호, 주소, 도시 등) 를 입력하면 가까운 위치의
              매장들이 표시됩니다.
            </p>
            <div>
              <div className="country">
                <label>지역</label>
                <select>{selectCountry}</select>
              </div>
              <div className="location" onClick={this.handleLabelMini}>
                <label
                  className={this.state.label === 'mini' ? 'mini-label' : ''}
                >
                  도로명, 지역 또는 우편번호
                </label>
                <input type="text" onChange={this.handleInput}></input>
              </div>
              <button onClick={this.sendContent}>검색</button>
            </div>
            <div className="donation">
              <label>
                <div className="checkbox" onClick={this.handleCheck}>
                  {check && <div className="click">✔️</div>}
                </div>

                <div className="text">
                  재활용 헌옷 방문 수거 프로그램 #joinlife
                </div>
                <div className="link">+보다 자세한 정보</div>
              </label>
            </div>
          </div>

          {/* 매장찾기 결과 */}
          <div
            className={`result-container ${this.state.result_show && 'hide'}`}
          >
            <StoreResult stores={stores} content={content} />
            <Map stores={stores} />
          </div>
        </section>
      </div>
    );
  }
}

export default Store;
