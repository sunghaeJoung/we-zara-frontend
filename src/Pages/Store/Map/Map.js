import React, { Component } from 'react';
import './Map.scss';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  }

  componentDidUpdate(prevState, nextState) {
    if (prevState !== nextState) {
      this.props.stores.length !== 0 && this.makeMap();
    }
  }

  makeMap = () => {
    const { stores } = this.props;
    console.log('들어와', stores[0]);
    let mapContainer = document.getElementById('map');
    let mapOption = {
      center: new window.kakao.maps.LatLng(
        stores[0].latitude,
        stores[0].longitude,
      ), // 지도의 중심좌표
      level: 9,
    };

    let map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

    for (let i = 0; i < stores.length; i++) {
      // 마커가 표시 위치
      let markerPosition = new window.kakao.maps.LatLng(
        stores[i].latitude,
        stores[i].longitude,
      );

      // 마커 이미지
      let imageSrc =
        'https://static.zara.net/stdstatic/1.145.2-b.4/images/markers/zara.png';
      let imageSize = new window.kakao.maps.Size(40, 64);
      let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    }
  };

  render() {
    return <div className="Map" id="map"></div>;
  }
}

export default Map;
