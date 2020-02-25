import React, { Component } from "react";

class FooterCompany extends Component {
  render() {
    return (
      <footer
        style={{
          color: "black",
          textAlign: "center",
          width: "80%",
          position: "absolute",
          bottom: "-400vh",
          right: "10%",
          fontSize: "0.8vw"
        }}
      >
        <hr />
        <p style={{ margin: 0 }}>
          아이티엑스코리아 유한회사 ｜ 사업자등록번호: 120-88-14733 ｜ 대표자 :
          ROMAY DE LA COLINA JOSE MANUEL ｜ 서울시 강남구 영동대로 511 (삼성동,
          트레이드타워 33층)
        </p>
        <p style={{ margin: 0 }}>
          ｜ 대표번호: 080-479-0880 | 이메일: contact.kr@zara.com ｜ 호스팅
          서비스 사업자: ITX Merken, B.V. ｜ 통신판매업신고 :
          제2014-서울강남-02297 (사업자정보확인) ｜
        </p>
        <p style={{ textDecoration: "underline", margin: 0 }}>
          개인정보취급방침 | 이용약관
        </p>
      </footer>
    );
  }
}

export default FooterCompany;
