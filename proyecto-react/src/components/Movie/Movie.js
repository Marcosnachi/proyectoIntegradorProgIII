import React, { Component } from "react";
import "./styles.css";
<meta charset="UTF-8"></meta>;

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
    if (this.props.orientation === "row") {
      return (
        <div className={`movie-${this.props.orientation}`}>
          <img
            className="img"
            src={"https://image.tmdb.org/t/p/w342" + this.props.poster}
            alt=""
          />
          <div className="movie_container">
            <h4 className="title"> {this.props.title} </h4>
            <p className="more pointer" onClick={() => this.handleShow()}>
              {this.state.mensaje}
            </p>
            <div className="text" className={this.state.clase}>
              {this.props.overview}
              <p>
                <strong>Puntuación: </strong> {this.props.vote_average}
              </p>
              <p>
                <strong>Fecha de Lanzamiento: </strong>{" "}
                {this.props.release_date}
              </p>
            </div>
            <div>
              <i
                onClick={() => this.props.removerPersonaje(this.props.title)}
                className="fas fa-times-circle pointer x"
              ></i>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`movie-${this.props.orientation}`}>
          <i
            onClick={() => this.props.removerPersonaje(this.props.title)}
            className="fas fa-times-circle pointer x"
          ></i>
          <img
            className="img"
            src={"https://image.tmdb.org/t/p/w342" + this.props.poster}
            alt=""
          />
          <div className="movie_container">
            <h4 className="title"> {this.props.title} </h4>
            <div className="text">
              {this.props.overview}
              <p>
                <strong>Puntuación: </strong> {this.props.vote_average}
              </p>
              <p>
                <strong>Fecha de Lanzamiento: </strong>{" "}
                {this.props.release_date}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}
