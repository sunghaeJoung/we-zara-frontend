<<<<<<< HEAD
import React, { Component } from "react";
import "./Main.scss";
import Header from "../../Components/Header/Header.js";
import Nav from "../../Components/Nav/Nav.js";
=======
import React, { Component } from 'react';
import './Main.scss';
import Header from '../../Components/Header/Header.js';
import Nav from '../../Components/Nav/Nav.js';
import Slider from '../../Components/Slider/Slider';
>>>>>>> de54ec8fb528d1285371f0bd09ef9ffcdc68ec5a

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'close',
      sliderData: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/sliderData.json')
      .then(res => res.json())
      .then(res => {
        console.log(10);
        this.setState({
          sliderData: res.data,
        });
      });
  };

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

  render() {
    return (
      <div className="main">
        <Header handlerOver={this.handlerOver} />
        <Nav handlerOut={this.handlerOut} nav={this.state.nav} />
<<<<<<< HEAD
=======
        <Slider data={this.state.sliderData} />
>>>>>>> de54ec8fb528d1285371f0bd09ef9ffcdc68ec5a
      </div>
    );
  }
}

export default Main;
