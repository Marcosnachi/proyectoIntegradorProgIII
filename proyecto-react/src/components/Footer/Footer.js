import React, { Component } from "react";
import "./styles.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <footer className="main-footer">
          <p>Marcos Nachimowicz - Franco Gaibisso</p>
        </footer>
      </React.Fragment>
    );
  }
}
