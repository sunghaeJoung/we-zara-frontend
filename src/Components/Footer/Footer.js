import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="list-hole">
          <li className="list-head">
            도움말
            <li>ZARA.COM에서 구매하기</li>
            <li>제품</li>
            <li>지불</li>
            <li>배송</li>
            <li>교환 및 환불</li>
            <li>매장 및 기업</li>
            <li>내 계정</li>
          </li>
          <li className="list-head">
            FOLLOW하기
            <li>뉴스레터</li>
            <li>TWITTER</li>
            <li>YOUTUBE</li>
          </li>
          <li className="list-head">
            회사
            <li>회사소개</li>
            <li>사무소</li>
            <li>매장</li>
            <li>자라에서 일하세요</li>
          </li>
          <li className="list-head">
            정책
            <li>개인정보보호정책</li>
            <li>이용약관</li>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
