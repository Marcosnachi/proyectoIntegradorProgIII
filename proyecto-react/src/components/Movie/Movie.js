import React, { Component } from "react";
import "./styles.css";

//Componente de presentación (sin lógica)
export default class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie">
        <img src={this.props.poster_path} alt="" />
        <h4> {this.props.title} </h4>
        <h4> Descripción: {this.props.overview}</h4>
        {/* <button onClick={() => this.props.removerPersonaje(this.props.name)}>
          {" "}
          Eliminar personaje
        </button> */}
      </div>
    );
  }
}