import React, { Component } from "react";
import "./styles.css";

//Componente de presentación (sin lógica)
export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "ver más",
      descripcion: this.props.overview,
      descripcionCortada: this.props.overview.slice(0, 130) + "...",
    };
  }

  handleShow() {
    if (this.state.descripcion.length <= 130) {
      this.setState({
        descripcionCortada: this.state.descripcion,
        mensaje: "ver menos",
      });
    } else {
      this.setState({
        descripcionCortada: this.state.descripcion,
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
        <h4 className={"show"}> {this.props.descripcionCortada}</h4>
        {/* <button onClick={() => this.props.removerPersonaje(this.props.name)}>
          {" "}
          Eliminar personaje
        </button> */}
      </div>
    );
  }
}
