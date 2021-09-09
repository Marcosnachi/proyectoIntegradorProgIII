import React, { Component } from "react";
import "./styles.css";


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <React.Fragment>
        <header class="main-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-5 col-md-2">
                    <a href="/" class="main-header_home-link">
                        {/* <img class="headerimg" src="nuestro logo"/>  */}
                        
                    </a>
                </div>
    
                <div class="col-7 col-md-6">
                    <form action="/search" method="GET" class="search-form">
                        <input type="text" value="" name="search" placeholder="Buscar peliculas" class="search-form_input"/>
                        <button type="submit" class="search-form_button"><i class="fas fa-search"></i></button>
                    </form>
                </div>
    
                <div class="col-12 col-md-4">
                    <a class="main-header_credit-link">
                        <i class="fas fa-chess-queen"></i>
                        {/* Todas las flores en un sólo lugar. */}
                    </a>
                </div>
            </div>
    
            <button class="btn-toggle-navbar">
                <i class="fas fa-bars"></i>
            </button>
    
            
        </div>
    </header>
    </React.Fragment>
    );
  }
}