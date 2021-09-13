import React, { Component } from "react";
import FilterField from "../FilterField/FilterField";
import Movie from "../Movie/Movie";
import "./styles.css";

export default class ContainerPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
      page: 2,
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
          filteredMovies: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  addCards() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=40ec58a7d82c64e794c15c9579790084&page=" +
        this.state.page
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let initialArray = this.state.movies;
        let nextArray = initialArray.concat(data.results);
        let nextPage = this.state.page + 1;

        this.setState({
          movies: nextArray,
          filteredMovies: nextArray,
          page: nextPage,
        });
      });
  }

  removeCard(title) {
    const filteredMovies = this.state.movies.filter(
      (element) => element.title !== title
    );

    this.setState({
      movies: filteredMovies,
      filteredMovies: filteredMovies,
    });
  }

  filtrarPorNombre(nombreAFiltrar) {
    console.log(nombreAFiltrar);
    const filteredArray = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(nombreAFiltrar.toLowerCase())
    );
    if (nombreAFiltrar === "") {
      this.setState({
        filteredMovies: this.state.movies,
      });
    } else {
      this.setState({
        filteredMovies: filteredArray,
      });
    }
  }

  render() {
    console.log("Me estoy renderizando!");
    console.log(this.state.filteredMovies);

    return (
      <div className="container">
        <FilterField
          filtrarPorNombre={(nombreAFiltrar) =>
            this.filtrarPorNombre(nombreAFiltrar)
          }
        />
        <button onClick={() => this.addCards()}>Cargar más películas</button>
        {this.state.filteredMovies.length === 0 ? (
          <h4> Cargando ... </h4>
        ) : (
          this.state.filteredMovies.map((movie, index) => {
            return (
              <Movie
                key={index}
                poster={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                removerPersonaje={(title) => this.removeCard(title)}
              />
            );
          })
        )}
      </div>
    );
  }
}
