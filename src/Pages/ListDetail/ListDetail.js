import React, { Component } from "react";
import "./ListDetail.scss";
import Header from "../../Components/Header/Header.js";
import Nav from "../../Components/Nav/Nav.js";
import LDSection from "../../Components/LDFolder/LDSection/LDSection.js";

class ListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "close"
    };
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
      <div className="list-detail">
        <Header handlerOver={this.handlerOver} />
        <Nav handlerOut={this.handlerOut} nav={this.state.nav} />
        <LDSection />
      </div>
    );
  }
}

export default ListDetail;
