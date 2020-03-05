import React, { Component } from 'react';
import './Login.scss';
import logo from '../../Images/Black/logo.svg';
import menuIcon from '../../Images/Black/menu-icon.svg';
// import Signup from '../SignUp/SignUp';
// import HoverBtn from '../button/HoverBtn';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: true,
      change1: false,
      change2: false,
      massage: false,
    };
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value,
    });
  };
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.setState({
        massage: true,
      });
    }
    console.log('message');
  };
  // this.state.password.length > 7
  // ? 'inputTip2'
  // : 'inputTip1'

  handleLoginButton = () => {
    fetch('http://10.58.2.227:8000/account/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        // console.log(response.token);
        if (response.token) {
          alert('로그인되었습니다.');
          window.localStorage.setItem('token', response.token);
          this.props.history.push('/');
        } else {
          alert('아이디 혹은 비밀번호를 확인하세요');
        }
      });
  };

  activateEmail = e => {
    this.setState({
      change1: true,
    });
  };

  activateEmai2 = e => {
    this.setState({
      change2: true,
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

  render() {
    return (
      <div className="Login">
        <nav>
          <div className="top">
            <div className="topleft">
              <div className="threeline">
                <img src={menuIcon} alt="삼 줄" />
              </div>
              <div className="ZARA">
                <img src={logo} alt="자라 로고" />
              </div>
            </div>
            <div className="topRight">도움말</div>
          </div>
          <body>
            <div className="feed">
              <div className="feed1">
                <p className="user">이미 사용자 계정이 있습니다.</p>
                <p className="user1">
                  본인 확인을 위해 이메일과 비밀번호를 입력하십시오.
                </p>
                <div className="email">
                  <label className={this.state.change1 ? 'change' : ''}>
                    이메일
                  </label>
                  <input
                    className={this.state.change1 ? 'black' : 'silver'}
                    onChange={this.handleEmail}
                    onFocus={this.activateEmail}
                    onBlur={this.disableEmail1}
                    type="text"
                  ></input>
                </div>
                <div className="password">
                  <label className={this.state.change2 ? 'change' : ''}>
                    패스워드
                  </label>
                  <input
                    className={this.state.change2 ? 'black' : 'silver'}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handlePassword}
                    onFocus={this.activateEmai2}
                    onBlur={this.disableEmail2}
                    type="password"
                    required
                  ></input>
                </div>
                <div>
                  <div className="forgetpassword">비밀번호를 잊으셨습니까?</div>
                </div>
                <div>
                  <button
                    className={'login'}
                    type={'submit'}
                    onClick={this.handleLoginButton}
                  >
                    로그인
                  </button>
                </div>
              </div>
              <div className="feed2">
                <p className="new-user">신규 사용자</p>
                <p className="user1">
                  Zara.com 회원으로 가입하시면 빠르고 편리하게 이용하실 수
                  있습니다.
                </p>
                <p className="user1">
                  아직 Zara.com 의 회원이 아니시라면 이메일로 간편하게 가입하실
                  수 있습니다.
                </p>
                <button
                  className={'makeUser'}
                  onClick={() => this.props.history.push('/Signup')}
                >
                  계정 만들기{' '}
                </button>
              </div>
            </div>
          </body>
          <article>
            <ul className="ul-list">
              <li>
                <ul className="help">
                  <li className="li-title">도움말</li>
                  <li className="list">
                    <a href="http://localhost:3000/">ZARA.COM에서 구매하기</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">제품</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">배송</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">교환 및 환불</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">매장 및 기업</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">내 계정</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="follow">
                  <li className="li-title">FOLLOW하기</li>
                  <li className="list">
                    <a href="http://localhost:3000/">FOLLOW하기</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">뉴스레터</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">TWITTER</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">YOUTUBE</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="company">
                  <li className="li-title">회사</li>
                  <li className="list">
                    <a href="http://localhost:3000/">회사소개</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">사무소</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">매장</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">자리에서 일하세요</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="policy">
                  <li className="li-title">정책</li>
                  <li className="list">
                    <a href="http://localhost:3000/">개인정보보호정책</a>
                  </li>
                  <li className="list">
                    <a href="http://localhost:3000/">이용약관</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="blank"></div>
            <div className="korea">
              <span>SOUTH KOREA / 대한민국</span>
              <span>한국어 | ENGLISH</span>
            </div>
            <div className="rights">© All rights reserved</div>
          </article>
        </nav>
      </div>
    );
  }
}

export default Login;
