import React, { Component } from "react";
import "./styles.css";
import FilterField from "../FilterField/FilterField";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <header class="main-header"></header>
      </React.Fragment>
    );
  }
}
