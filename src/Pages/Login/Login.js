import React, { Component } from 'react';
import './Login.scss';
import logo from '../../Images/Black/logo.svg';
import menuIcon from '../../Images/Black/menu-icon.svg';
import Header from '../../Components/Header/Header.js';
import Nav from '../../Components/Nav/Nav.js';

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

  handlerOver = () => {
    this.setState({
      nav: 'open',
    });
  };

  handlerOut = () => {
    this.setState({
      nav: 'close',
    });
  };

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
      <>
        <Header handlerOver={this.handlerOver} />
        <Nav handlerOut={this.handlerOut} nav={this.state.nav} />
        <div className="Login">
          <nav>
            <body>
              <div className="feed">
                <div className="feed1">
                  <p className="user">로그인</p>
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
                    <div className="forgetpassword">
                      비밀번호를 잊으셨습니까?
                    </div>
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
                  <p className="new-user">등록</p>
                  <p className="user1">
                    Zara.com 회원으로 가입하시면 빠르고 편리하게 이용하실 수
                    있습니다.
                  </p>
                  <p className="user1">
                    아직 Zara.com 의 회원이 아니시라면 이메일로 간편하게
                    가입하실 수 있습니다.
                  </p>
                  <button
                    className={'makeUser'}
                    onClick={() => this.props.history.push('/signup')}
                  >
                    계정 만들기{' '}
                  </button>
                </div>
              </div>
            </body>
          </nav>
        </div>
      </>
    );
  }
}

export default Login;
