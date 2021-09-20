import React, { Component } from "react";
import "./styles.css";
import logo from "../Header/logo3.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="header_container">
          <header className="main-header">
            <a href="/">
              <img className="logo" src={logo} alt="" />
            </a>
          </header>
        </div>
      </React.Fragment>
    );
  }
}
