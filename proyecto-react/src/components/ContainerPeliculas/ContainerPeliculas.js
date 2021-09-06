import React, { Component } from "react";
import "./styles.css";

export default class ContainerPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=40ec58a7d82c64e794c15c9579790084"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data.results);
        //let personajes = data.results;

        //A la información que obtengo la guardo en el estado dentro de una propiedad
        this.setState({
          movies: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log("Me estoy renderizando!");
    console.log(this.state.movies);

    return <div></div>;
  }
}
