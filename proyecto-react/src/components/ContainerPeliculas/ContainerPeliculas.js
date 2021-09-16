import React, { Component } from "react";
import FilterField from "../FilterField/FilterField";
import Movie from "../Movie/Movie";
import "./styles.css";
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

export default class ContainerPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
      page: 2,
      orientation: 'row'
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
          return: '',
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

  changeOrientation(){
if (this.state.orientation === 'row') {
  this.setState({
    orientation: 'column'
  })
} else{
    this.setState({
      orientation: 'row'
    })
  }
  }
  render() {
    console.log("Me estoy renderizando!");
    console.log(this.state.filteredMovies);

    return (
      <div className={`container-${this.state.orientation}`}>
        <FilterField
          filtrarPorNombre={(nombreAFiltrar) =>
            this.filtrarPorNombre(nombreAFiltrar)
          }
        />
        <button className='boton' onClick={() => this.addCards()}>Cargar más películas</button>
        <button className='boton' onClick={() => this.changeOrientation()}>Cambiar orientacion</button>

        {this.state.filteredMovies.length === 0 ? (
          <div className="loader"> <h1 className= 'notFound'> No se encontraron peliculas para su busqueda</h1></div>
        ) : (
          this.state.filteredMovies.map((movie, index) => {
            return (
              <Movie
                key={index}
                poster={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                orientation={this.state.orientation}
                removerPersonaje={(title) => this.removeCard(title)}
              />
            );
          })
        )}
      </div>
    );
  }
}
