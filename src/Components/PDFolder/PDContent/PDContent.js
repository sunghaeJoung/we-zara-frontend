import React, { Component } from 'react';
import Modal from '../../Modal/Modal';
import PDAdd from '../PDAdd/PDAdd';

class PDContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModal1: false,
      isModal2: false,
      isModal3: false,
      isModal4: false,
      isModal5: false,
    };
  }

  render() {
    return (
      <div className="product-wrapper">
        <div className="product-detail">
          <div className="product-detail__image-container">
            {this.props.data.map(arr => (
              <img src={arr.img} alt="" />
            ))}
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
                    'url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat 0',
                  backgroundSize: 8,
                  marginTop: 10,
                  marginBottom: 8,
                  fontSize: 14,
                  paddingLeft: 12,
                  cursor: 'pointer',
                }}
              >
                더 보기
              </p>
              <ul className="size-lists">
                <li onClick="this.">XS (KR 44)</li>
                <li>S (KR 55)</li>
                <li>M (KR 66)</li>
                <li>L (KR 77)</li>
              </ul>
              <div
                className="product-btn"
                onClick={() =>
                  this.setState({
                    isModal5: true,
                  })
                }
              >
                내 사이즈 확인하기
              </div>
              <Modal
                dialogStyle={{ maxWidth: '800px' }}
                isVisible={this.state.isModal5}
                title="내 사이즈 확인하기"
                content={
                  <div className="offline-store-modal">
                    <div>
                      <p style={{ marginBottom: 20 }}>
                        매장 재고 확인을 위해 사이즈를 선택해 주십시오.
                      </p>
                      <p>찾으시는 사이즈는 무엇입니까?</p>
                      <div className="checkbox-container">
                        <label>
                          <input type="checkbox" />
                          <span> S (KR 55)</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span> M (KR 66)</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span> L (KR 77)</span>
                        </label>
                      </div>
                      <div style={{ marginTop: 15 }} className="modal-btn">
                        계속
                      </div>
                    </div>
                    <div>
                      <img
                        src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_1_1_1.jpg?ts=1582542145957"
                        alt=""
                      />
                    </div>
                  </div>
                }
                onClose={() =>
                  this.setState({
                    isModal5: false,
                  })
                }
              />
              <PDAdd />
              <div className="info__text">
                <p
                  className="info-p"
                  onClick={() =>
                    this.setState({
                      isModal1: true,
                    })
                  }
                >
                  혼용물 및 세탁 방법
                </p>
                <Modal
                  dialogStyle={{ maxWidth: '300px' }}
                  isVisible={this.state.isModal1}
                  title="구성소재"
                  content={
                    <div>
                      <p style={{ marginBottom: 10, fontWeight: 'bold' }}>
                        걸감
                      </p>
                      <p style={{ textDecoration: 'underline' }}>주요소재</p>
                      <p>96% 면</p>
                      <p>4% 엘라스탄</p>
                      <div style={{ marginBottom: 20 }}></div>
                      <p style={{ textDecoration: 'underline' }}>부소재</p>
                      <p>66% 폴리에스터,</p>
                      <p>32% 비스코스,</p>
                      <p>2% 엘라스탄</p>
                      <p style={{ marginTop: 20, fontWeight: 'bold' }}>안감</p>
                      <p>95% 폴리에스터, 5% 엘라스탄</p>
                      <p style={{ marginTop: 20, fontWeight: 'bold' }}>
                        주의사항
                      </p>
                    </div>
                  }
                  onClose={() =>
                    this.setState({
                      isModal1: false,
                    })
                  }
                />
                <p
                  className="info-p"
                  onClick={() =>
                    this.setState({
                      isModal2: true,
                    })
                  }
                >
                  오프라인 매장에 재고 상태 보기
                </p>
                <Modal
                  dialogStyle={{ maxWidth: '800px' }}
                  isVisible={this.state.isModal2}
                  title="오프라인 매장에 재고 상태 보기"
                  content={
                    <div className="offline-store-modal">
                      <div>
                        <p style={{ marginBottom: 20 }}>
                          매장 재고 확인을 위해 사이즈를 선택해 주십시오.
                        </p>
                        <p>찾으시는 사이즈는 무엇입니까?</p>
                        <div className="checkbox-container">
                          <label>
                            <input type="checkbox" />
                            <span> S (KR 55)</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span> M (KR 66)</span>
                          </label>
                          <label>
                            <input type="checkbox" value={this.state.checked} />
                            <span> L (KR 77)</span>
                          </label>
                        </div>
                        <div style={{ marginTop: 15 }} className="modal-btn">
                          계속
                        </div>
                      </div>
                      <div>
                        <img
                          src="https://static.zara.net/photos///2020/V/0/1/p/0190/021/172/72/w/1412/0190021172_1_1_1.jpg?ts=1582542145957"
                          alt=""
                        />
                      </div>
                    </div>
                  }
                  onClose={() =>
                    this.setState({
                      isModal2: false,
                    })
                  }
                />
                <p
                  className="info-p"
                  onClick={() =>
                    this.setState({
                      isModal3: true,
                    })
                  }
                >
                  배송, 교환 및 반품
                </p>
                <Modal
                  dialogStyle={{ maxWidth: '600px' }}
                  title="배송, 교환 및 반품"
                  isVisible={this.state.isModal3}
                  onClose={() => {
                    this.setState({
                      isModal3: false,
                    });
                  }}
                  content={
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus
                        <br />
                        quo officiis doloribus nobis incidunt animi in, eos iste
                        harum
                        <br />
                        recusandae quae deserunt aliquam! Quia ullam aperiam
                        <br />
                        repudiandae molestias quasi rem expedita, praesentium
                        facilis est blanditiis cum distinctio iste vitae
                        ratione, suscipit error dolores fuga
                        <br />
                        odit et non sit! Odio ex doloribus quidem ab, asperiores
                        nostrum officia quo voluptates recusandae blanditiis cum
                        saepe eum dolorum ut porro fugiat provident soluta
                        incidunt consectetur libero placeat consequuntur!
                        Recusandae deserunt pariatur ipsa facere at omnis
                        suscipit? Adipisci voluptates officia facilis commodi
                        iste, veniam possimus incidunt voluptatem, aspernatur
                        est accusantium. Incidunt consequuntur unde modi!
                        Dolorum vel, repellat alias aperiam fugit nisi totam
                        vitae cupiditate ab tempora nemo similique assumenda
                        architecto doloribus ipsam dignissimos suscipit non.
                      </p>
                    </div>
                  }
                />
                <p className="info-p">공유하기</p>
              </div>
            </div>
          </div>
        </div>

        <div className="look-perfection">
          <h1>룩 완성하기</h1>
          <p style={{ color: 'gray' }}>3 상품</p>

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
                      borderTop: '1px solid #000',
                      borderBottom: '1px solid #000',
                      background:
                        'url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat right',
                      backgroundSize: 8,
                      marginTop: 10,
                      marginBottom: 8,
                      fontSize: 14,
                      padding: '10px 0',
                      paddingRight: 12,
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
                      borderTop: '1px solid #000',
                      borderBottom: '1px solid #000',
                      background:
                        'url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat right',
                      backgroundSize: 8,
                      marginTop: 10,
                      marginBottom: 8,
                      fontSize: 14,
                      padding: '10px 0',
                      paddingRight: 12,
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
                      borderTop: '1px solid #000',
                      borderBottom: '1px solid #000',
                      background:
                        'url(https://static.zara.net/stdstatic/1.144.0-b.7/icons/new-arrow-down.svg) no-repeat right',
                      backgroundSize: 8,
                      marginTop: 10,
                      marginBottom: 8,
                      fontSize: 14,
                      padding: '10px 0',
                      paddingRight: 12,
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

PDContent.defaultProps = {
  isVisible: false,
};

export default PDContent;
