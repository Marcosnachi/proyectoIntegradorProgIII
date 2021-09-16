import React, { Component } from "react";
import "./styles.css";
<meta charset="UTF-8"></meta>

//Componente de presentación (sin lógica)
export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clase: "hide",
      mensaje: "ver más",
    };
  }

  handleShow() {
    if (this.state.clase === "hide") {
      this.setState({
        clase: "show",
        mensaje: "ver menos",
      });
    } else {
      this.setState({
        clase: "hide",
        mensaje: "ver más",
      });
    }
  }

  render() {
    return (
      <div className="movie">
        <img
          src={"https://image.tmdb.org/t/p/w342" + this.props.poster}
          alt=""
        />
        <h4 className="title"> {this.props.title} </h4>
        <p className="more" onClick={() => this.handleShow()}>
          {this.state.mensaje}
        </p>
        <p className={this.state.clase}>{this.props.overview}</p>
        <p onClick={() => this.props.removerPersonaje(this.props.title)}>
          {" "}
         
          <p className= 'x'>&#10060;</p>

        </p>
      </div>
    );
  }
}
