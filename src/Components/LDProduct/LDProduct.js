import React, { Component } from "react";
import "./LDProduct.scss";

class LDProduct extends Component {
  render() {
    return (
      <div className="list-detail-product">
        <ul className="list-detail-product-ul">
          <li className="product">
            <div className="image">
              <img src="https://static.zara.net/photos///2020/V/M/1/p/0000/002/507/2/w/1104/0000002507_1_1_1.jpg?ts=1582547645514"></img>
            </div>
            <div className="text"></div>
          </li>
          <li className="product">
            <div className="image">
              <img src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1104/0190021172_2_1_1.jpg?ts=1582542167932"></img>
            </div>
            <div className="text">
              <div className="new">NEW</div>
              <div className="name">레더 오버셔츠</div>
              <div className="price">259,000원</div>
            </div>
          </li>
          <li className="category-description-top">
            <div className="category-header">새로운 여성 패션의 트렌드</div>
            <div className="category-description">
              최신 트렌드를 만나볼 수 있는 Zara 위클리 에딧을 지금 확인해보세요.
              모든 여성과 모든 순간을 위한 여성 컬렉션과 TRF 신상품에서 원피스,
              코트, 부츠, 백을 쇼핑해보세요. Zara와 함께 최신 패션 트렌드를
              경험해보세요.
            </div>
          </li>

          {/* ------------------------------------------------------- */}
          <li className="product">
            <div className="image">
              <img src="https://static.zara.net/photos///2020/V/0/1/p/0190/024/727/72/w/1104/0190024727_1_1_1.jpg?ts=1582542404649"></img>
            </div>
            <div className="text">
              <div className="new">NEW</div>
              <div className="name">레더 원피스</div>
              <div className="price">299,000원</div>
            </div>
          </li>
          <li className="product">
            <div className="image">
              <img src="https://static.zara.net/photos///2020/V/1/1/p/2356/510/040/2/w/1104/2356510040_1_1_1.jpg?ts=1582111524352"></img>
            </div>
            <div className="text">
              <div className="new">NEW / +1 컬러</div>
              <div className="name">스퀘어 토 레더 힐 샌들</div>
              <div className="price">99,000원</div>
            </div>
          </li>
          <li className="product product-width">
            <div className="image">
              <img src="https://static.zara.net/photos///2020/V/0/1/p/0190/020/712/72/cb-0-0-4176-3072-Center/w/3530/0190020712_1_1_1.jpg?ts=1582544663490"></img>
            </div>
            <div className="text">
              <div className="new">NEW</div>
              <div className="name">슬라우치 팬츠</div>
              <div className="price">239,000원</div>
            </div>
          </li>

          {/* -------------------------마케팅------------------------------ */}
        </ul>
      </div>
    );
  }
}

export default LDProduct;
