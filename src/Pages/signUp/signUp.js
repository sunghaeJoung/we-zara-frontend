import React, { Component } from 'react';
import './SignUp.scss';
import logo from '../../Images/Black/logo.svg';
import menuIcon from '../../Images/Black/menu-icon.svg';
import DaumPostcode from 'react-daum-postcode';
import { createGlobalStyle } from 'styled-components';
import Header from '../../Components/Header/Header.js';
import Nav from '../../Components/Nav/Nav.js';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      name: '',
      zip_code: '',
      adress_1: '',
      adress_2: '',
      phone: '',
      login: true,
      change1: false,
      change2: false,
      change3: false,
      change4: false,
      change5: false,
      change6: false,
      change7: false,
      change8: false,
    };
  }

  handleEmail = e => {
    this.setState(
      {
        email: e.target.value,
      },
      () => {
        console.log('1', this.state.email);
      },
    );
    console.log(e.target.value);
  };
  handlePassword = e => {
    this.setState({
      password: e.target.value,
    });
  };
  handlerePassword = e => {
    this.setState({
      rePassword: e.target.value,
    });
  };
  handleName = e => {
    this.setState({
      name: e.target.value,
    });
    console.log(e.target.value);
  };
  handlezipCode = e => {
    this.setState({
      zip_code: e.target.value,
    });
  };
  handleadress = e => {
    this.setState({
      address_1: e.target.value,
    });
  };
  handleoptions = e => {
    this.setState({
      address_2: e.target.value,
    });
  };
  handleArea = e => {
    this.setState({
      phone: e.target.value,
    });
    console.log(e.target.value);
  };
  handleAddress = () => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        let fullAddress = data.address;
        let extraAddress = data.zonecode;

        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var addr = ''; // 주소 변수
        var extraAddr = ''; // 참고항목 변수
        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') {
          // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }
        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === 'R') {
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr +=
              extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')';
          } // 조합된 참고항목을 해당 필드에 넣는다.
          // document.getElementById('sample6_extraAddress').value = extraAddr;
        } else {
          // document.getElementById('sample6_extraAddress').value = '';
        }
        document.getElementById('zip_code').value = data.zonecode;
        document.getElementById('address').value = addr;
        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        // 커서를 상세주소 필드로 이동한다.
        // document.getElementById('sample6_detailAddress').focus();
      },
    }).open();
  };

  handleLoginButton = () => {
    if (this.state.password === this.state.rePassword) {
      fetch('http://10.58.2.227:8000/account/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          phone: this.state.phone,
          zip_code: this.state.zip_code,
          address_1: this.state.address_1,
          address_2: this.state.address_2,
        }),
      })
        .then(response => response.json())
        .then(response => {
          console.log(this.state.email);
          console.log(this.state.password);
          console.log(this.state.name);
          console.log(this.state.area);
          console.log(this.state.zip_code);
          console.log(this.state.address_1);
          console.log(this.state.address_2);
          if (response.status === 200) {
            alert('가입이 완료되었습니다.');
            this.props.history.push('../Login/Login.js');
          } else {
            alert('입력값을 확인해주세요');
          }
        });
    } else {
      alert('불일치 합니다.');
    }
  };
  activateEmail1 = e => {
    this.setState({
      change1: true,
    });
  };
  activateEmail2 = e => {
    this.setState({
      change2: true,
    });
  };
  activateEmail3 = e => {
    this.setState({
      change3: true,
    });
  };
  activateEmail4 = e => {
    this.setState({
      change4: true,
    });
  };
  activateEmail5 = e => {
    this.setState({
      change5: true,
    });
  };
  activateEmail6 = e => {
    this.setState({
      change6: true,
    });
  };
  activateEmail7 = e => {
    this.setState({
      change7: true,
    });
  };
  activateEmail8 = e => {
    this.setState({
      change8: true,
    });
  };
  disableEmail1 = e => {
    if (e.target.value === '') {
      this.setState({
        change1: false,
      });
    }
  };
  disableEmail2 = e => {
    if (e.target.value === '') {
      this.setState({
        change2: false,
      });
    }
  };
  disableEmail3 = e => {
    if (e.target.value === '') {
      this.setState({
        change3: false,
      });
    }
  };
  disableEmail4 = e => {
    if (e.target.value === '') {
      this.setState({
        change4: false,
      });
    }
  };
  disableEmail5 = e => {
    if (e.target.value === '') {
      this.setState({
        change5: false,
      });
    }
  };
  disableEmail6 = e => {
    if (e.target.value === '') {
      this.setState({
        change6: false,
      });
    }
  };
  disableEmail7 = e => {
    if (e.target.value === '') {
      this.setState({
        change7: false,
      });
    }
  };
  disableEmail8 = e => {
    if (e.target.value === '') {
      this.setState({
        change8: false,
      });
    }
  };
  render() {
    let pCode = (
      <DaumPostcode onComplete={this.handleAddress} {...this.props} />
    );
    console.log(this.state.password, this.state.rePassword);
    return (
      <div className="SignUp">
        <nav>
          <Header handlerOver={this.handlerOver} />
          <Nav handlerOut={this.handlerOut} nav={this.state.nav} />
          <main>
            <div className="feed">
              <div className="feed1">
                <p className="user">개인 정보를 입력하세요</p>
                <div className="email topbox">
                  <label className={this.state.change1 ? 'change' : ''}>
                    이메일
                  </label>
                  <input
                    className={this.state.change1 ? 'black' : 'silver'}
                    onChange={this.handleEmail}
                    onFocus={this.activateEmail1}
                    onBlur={this.disableEmail1}
                    type="text"
                  ></input>
                  <div className={this.state.change1 ? 'colorred' : ''}>
                    {this.state.change1
                      ? '귀하의 이메일 주소를 입력하여주십시오.'
                      : ''}
                  </div>
                </div>
                <div className="SignUpPassword">
                  <div className="password topbox">
                    <label className={this.state.change2 ? 'change' : ''}>
                      비밀번호
                    </label>
                    <input
                      className={this.state.change2 ? 'black' : 'silver'}
                      onChange={this.handlePassword}
                      onFocus={this.activateEmail2}
                      onBlur={this.disableEmail2}
                      type="password"
                    ></input>
                  </div>
                  <div className="rePassword topbox">
                    <label className={this.state.change3 ? 'change' : ''}>
                      비밀번호를 한 번 더 입력해 주십시오
                    </label>
                    <input
                      className={this.state.change3 ? 'black' : 'silver'}
                      onChange={this.handlerePassword}
                      onFocus={this.activateEmail3}
                      onBlur={this.disableEmail3}
                      type="password"
                    ></input>
                  </div>
                </div>
                <div className="SignUpEmail">
                  <div className="name topbox">
                    <label className={this.state.change4 ? 'change' : ''}>
                      이름
                    </label>
                    <input
                      className={this.state.change4 ? 'black' : 'silver'}
                      onChange={this.handleName}
                      onFocus={this.activateEmail4}
                      onBlur={this.disableEmail4}
                      type="text"
                    ></input>
                    <div className={this.state.change4 ? 'colorred' : ''}>
                      {this.state.change4 ? '이름을 입력하여 주십시오.' : ''}
                    </div>
                  </div>
                  <div className="zipCode">
                    <div className="zipCodes topbox">
                      <label className={this.state.change5 ? 'change' : ''}>
                        우편번호
                      </label>

                      <input
                        id="zip_code"
                        className={this.state.change5 ? 'black' : 'silver'}
                        onChange={this.handlezipCode}
                        onFocus={this.activateEmail5}
                        onBlur={this.disableEmail5}
                        type="text"
                      ></input>
                      <div className={this.state.change5 ? 'colorred' : ''}>
                        {this.state.change5
                          ? '유효한 우편번호를 입력하세요. 예: 50598'
                          : ''}
                      </div>
                    </div>
                    <div>
                      <button
                        className="zipCodeButton"
                        onClick={this.handleAddress}
                      >
                        우편번호 찾기
                      </button>
                    </div>
                  </div>
                </div>
                <div className="SignUpAdress">
                  <div className="adress topbox">
                    <label className={this.state.change6 ? 'change' : ''}>
                      주소
                    </label>
                    <input
                      id="address"
                      className={this.state.change6 ? 'black' : 'silver'}
                      onChange={this.handleadress}
                      onFocus={this.activateEmail6}
                      onBlur={this.disableEmail6}
                      type="text"
                    ></input>
                    <div className={this.state.change6 ? 'colorred' : ''}>
                      {this.state.change6
                        ? '아래 칸에 상세 주소를 입력해 주십시오.'
                        : ''}
                    </div>
                  </div>
                  <div className="options topbox">
                    <label className={this.state.change7 ? 'change' : ''}>
                      선택사항
                    </label>
                    <input
                      className={this.state.change7 ? 'black' : 'silver'}
                      onChange={this.handleoptions}
                      onFocus={this.activateEmail7}
                      onBlur={this.disableEmail7}
                      type="text"
                    ></input>
                    <div className={this.state.change7 ? 'colorred' : ''}>
                      {this.state.change7
                        ? '앞 칸에 입력하신 주소가 초과되면 다음 칸에 기재하십시오.'
                        : ''}
                    </div>
                  </div>
                </div>
                <div className="korea">
                  <div>
                    <div>지역</div>
                    <div>대한민국</div>
                  </div>

                  <div className="area">
                    <div className="areaNumber topbox">
                      {' '}
                      지역번호
                      <div>+82</div>
                    </div>

                    <div className="area1 topbox">
                      <label className={this.state.change8 ? 'change' : ''}>
                        전화
                      </label>
                      <input
                        className={this.state.change8 ? 'black' : 'silver'}
                        onChange={this.handleArea}
                        onFocus={this.activateEmail8}
                        onBlur={this.disableEmail8}
                        type="text"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="checkBox">
                  <input type="checkbox" name="dummy" id="checkAll"></input>

                  <label htmlFor="checkAll">모든 항목에 체크하기</label>
                  <ul>
                    <li>
                      <input type="checkbox" name="privacy" id="collection" />

                      <label htmlFor="collection">
                        * 개인정보의 수집 및 이용에 대한 동의자세히 보기
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="privacy"
                        id="foreign"
                      ></input>
                      <label for="foreign">
                        * 개인정보의 국외 이전에 대한 동의 자세히 보기
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="privacy" id="news"></input>

                      <label for="news">
                        뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의
                        자세히 보기
                      </label>
                    </li>
                  </ul>
                </div>
                <button
                  className={'SignUpButton'}
                  onClick={this.handleLoginButton}
                >
                  가입하기
                </button>
              </div>
            </div>
          </main>
        </nav>
      </div>
    );
  }
}

export default SignUp;
