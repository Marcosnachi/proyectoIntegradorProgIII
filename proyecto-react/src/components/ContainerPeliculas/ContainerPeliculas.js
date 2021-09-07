import React, { Component } from "react";
import Movie from "../Movie/Movie";
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
      "https://api.themoviedb.org/3/movie/popular?api_key=40ec58a7d82c64e794c15c9579790084"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          movies: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log("Me estoy renderizando!");
    console.log(this.state.movies);

    return (
      <div className="container">
        {this.state.movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              poster_path={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
            />
          );
        })}
      </div>
    );
  }
}
