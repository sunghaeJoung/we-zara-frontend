import React, { Component } from "react";
import "./ListDetail.scss";
import Header from "../../Components/Header/Header.js";
import Nav from "../../Components/Nav/Nav.js";
import LDSection from "../../Components/LDSection/LDSection.js";

class ListDetail extends Component {
  render() {
    return (
      <div className="list-detail">
        <Header />
        <Nav />
        <LDSection />
      </div>
    );
  }
}

export default ListDetail;
