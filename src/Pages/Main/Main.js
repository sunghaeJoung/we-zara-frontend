import React, { Component } from "react";
import "./Main.scss";
import Header from "../../Components/Header/Header.js";
import Nav from "../../Components/Nav/Nav.js";
import Slider from "../../Components/Slider/Slider";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "close",
      sliderData: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/sliderData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  }

  handlerOver = () => {
    this.setState({
      nav: "open"
    });
  };

  handlerOut = () => {
    this.setState({
      nav: "close"
    });
  };

  render() {
    return (
      <div className="main">
        <Header handlerOver={this.handlerOver}></Header>
        <Nav handlerOut={this.handlerOut} nav={this.state.nav} />
        <Slider />
      </div>
    );
  }
}

export default Main;
