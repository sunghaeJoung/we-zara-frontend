import React, { Component } from "react";
import "./LDProduct.scss";
import LDPMarketing from "../LDPMarketing/LDPMarketing.js";
import LDPList from "../LDPList/LDPList.js";
import LDPList2 from "../LDPList/LDPList2.js";

class LDProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketing: [],
      product: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        console.log(res.product_list);
        this.setState({ marketing: res.marketing, product: res.product_list });
      });
  };

  render() {
    const marketingList = this.state.marketing.map(card => {
      return <LDPMarketing id={card.id} img={card.img} />;
    });

    const productList = this.state.product.map(list => {
      if (list.id % 3 === 1) {
        return (
          <LDPList
            id={list.id}
            img={list.img}
            new={list.new}
            name={list.name}
            price={list.price}
          />
        );
      } else {
        return (
          <LDPList2
            id={list.id}
            img={list.img}
            new={list.new}
            name={list.name}
            price={list.price}
          />
        );
      }
    });

    return (
      <div className="list-detail-marketing">
        <ul className="list-detail-marketing-ul">
          <li className="marketing">
            <div className="image">
              <img src="https://static.zara.net/photos///2020/V/M/1/p/0000/002/599/2/w/3530/0000002599_9_1_1.jpg?ts=1582715273494"></img>
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
          <li className="marketing-banner">
            <img src="https://static.zara.net/photos///2020/V/M/1/p/0000/002/724/2/w/3530/0000002724_9_1_1.jpg?ts=1582744512763"></img>
          </li>

          {marketingList}

          <li className="marketing-banner">
            <img src="https://static.zara.net/photos///2020/V/M/1/p/0000/002/724/2/w/3530/0000002724_9_1_1.jpg?ts=1582744512763"></img>
          </li>

          {productList}
        </ul>
      </div>
    );
  }
}

export default LDProduct;
