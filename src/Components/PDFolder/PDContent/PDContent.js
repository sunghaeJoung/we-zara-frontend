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
              <img src={arr} alt="" />
            ))}
          </div>

          <div className="product-detail__info-container">
            <div className="info">
              <h1 style={{ marginBottom: 5 }}>{this.props.title}</h1>
              <p style={{ marginBottom: 5 }}>{this.props.price} 원</p>
              <p>{this.props.description}</p>
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
                <li>XS (KR 44)</li>
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
                      <div
                        style={{ marginTop: 15, cursor: 'pointer' }}
                        className="modal-btn"
                        onClick={() =>
                          this.setState({
                            isModal5: false,
                          })
                        }
                      >
                        계속
                      </div>
                    </div>
                    <div>
                      <img src={this.props.data[1]} alt="" />
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
                        <div
                          style={{ marginTop: 15 }}
                          className="modal-btn"
                          onClick={() =>
                            this.setState({
                              isModal2: false,
                            })
                          }
                        >
                          계속
                        </div>
                      </div>
                      <div>
                        <img src={this.props.data[1]} alt="" />
                      </div>
                    </div>
                  }
                  onClose={() =>
                    this.setState({
                      isModal2: false,
                    })
                  }
                />
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
