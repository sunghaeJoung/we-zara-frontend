import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <div className="product-wrapper">
        <div className="product-detail">
          <div className="product-detail__image-container">
            <img
              src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_1_1_1.jpg?ts=1582542145957"
              alt=""
            />
            <img
              src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_2_1_1.jpg?ts=1582542167932"
              alt=""
            />
            <img
              src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_2_2_1.jpg?ts=1582542146942"
              alt=""
            />
            <img
              src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_2_3_1.jpg?ts=1582542154939"
              alt=""
            />
            <img
              src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_2_4_1.jpg?ts=1582542152612"
              alt=""
            />
            <img
              src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_6_1_1.jpg?ts=1582542139724"
              alt=""
            />
          </div>

          <div className="product-detail__info-container">
            <div className="info">
              <h1>레더 오버셔츠</h1>
              <p>259,000 원</p>
              <p style={{ marginTop: 22, marginBottom: 5 }}>172 - 0190/021</p>
              <p>
                라펠 칼라 긴소매 오버셔츠. 양 옆면 포켓과 앞면 플랩 패치 포켓.
                앞면 버튼 여밈.
              </p>
              <p
                style={{
                  background:
                    "url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat 0",
                  backgroundSize: 8,
                  marginTop: 10,
                  marginBottom: 8,
                  fontSize: 14,
                  paddingLeft: 12
                }}
              >
                더 보기
              </p>
              <ul className="size-lists">
                <li>XS (KR 44)</li>
                <li>S (KR 55)</li>
                <li>M (KR 66)</li>
                <li>L (KR 77)</li>
              </ul>
              <div className="product-btn">내 사이즈 확인하기</div>
              <div className="product-btn product-btn--black">추가하기</div>
              <div className="info__text">
                <p>혼용물 및 세탁 방법</p>
                <p>오프라인 매장에 재고 상태 보기</p>
                <p>배송, 교환 및 반품</p>
                <p>공유하기</p>
              </div>
            </div>
          </div>
        </div>

        <div className="look-perfection">
          <h1>룩 완성하기</h1>
          <p style={{ color: "gray" }}>3 상품</p>

          <div className="look-perfection__images">
            <div>
              <img
                src="https://static.zara.net/photos///2020/V/0/1/p/0190/023/172/72/w/1154/0190023172_6_1_1.jpg?ts=1582542163876"
                alt=""
              />
              <p>레더 버뮤다 팬츠</p>
              <p>199,000 원</p>
              <div>
                <div>
                  <p
                    style={{
                      borderTop: "1px solid #000",
                      borderBottom: "1px solid #000",
                      background:
                        "url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat right",
                      backgroundSize: 8,
                      marginTop: 10,
                      marginBottom: 8,
                      fontSize: 14,
                      padding: "10px 0",
                      paddingRight: 12
                    }}
                  >
                    사이즈를 선택하세요
                  </p>
                </div>
                <div className="product-detail__btn">
                  <p>추가하기</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://static.zara.net/photos///2020/V/1/1/p/2358/510/105/3/w/1154/2358510105_1_1_1.jpg?ts=1582030695264"
                alt=""
              />
              <p>레더 버뮤다 팬츠</p>
              <p>199,000 원</p>
              <div>
                <div>
                  <p
                    style={{
                      borderTop: "1px solid #000",
                      borderBottom: "1px solid #000",
                      background:
                        "url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat right",
                      backgroundSize: 8,
                      marginTop: 10,
                      marginBottom: 8,
                      fontSize: 14,
                      padding: "10px 0",
                      paddingRight: 12
                    }}
                  >
                    사이즈를 선택하세요
                  </p>
                </div>
                <div className="product-detail__btn">
                  <p>추가하기</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://static.zara.net/photos///2020/V/1/1/p/6720/510/105/3/w/1154/6720510105_1_1_1.jpg?ts=1581324173385"
                alt=""
              />
              <p>레더 버뮤다 팬츠</p>
              <p>199,000 원</p>
              <div>
                <div>
                  <p
                    style={{
                      borderTop: "1px solid #000",
                      borderBottom: "1px solid #000",
                      background:
                        "url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat right",
                      backgroundSize: 8,
                      marginTop: 10,
                      marginBottom: 8,
                      fontSize: 14,
                      padding: "10px 0",
                      paddingRight: 12
                    }}
                  >
                    사이즈를 선택하세요
                  </p>
                </div>
                <div className="product-detail__btn">
                  <p>추가하기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
