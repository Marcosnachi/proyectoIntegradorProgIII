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
        <img src={ 'https://image.tmdb.org/t/p/w342' + this.props.poster_path} alt="" />
        <h4 className= "titulo"> {this.props.title} </h4>
        <h4 className= "descripcion"> {this.props.overview}</h4>
        {/* <button onClick={() => this.props.removerPersonaje(this.props.name)}>
          {" "}
          Eliminar personaje
        </button> */}
      </div>
    );
  }
}
