import React, { Component } from "react";

export default class FilterField extends Component {
  constructor() {
    super();
    //Valor inicial del estado
    this.state = {
      valorInput: "",
    };
  }

  prevenirSubmit(event) {
    console.log(
      "Prevenimos el comportamiento por default del form que es recargar la página"
    );
    event.preventDefault();
  }

  capturaInput(event) {
    this.setState({ valorInput: event.target.value }, () =>
      this.props.filtrarPorNombre(this.state.valorInput)
    );
  }

  render() {
    return (
      <form onSubmit={(event) => this.prevenirSubmit(event)}>
        <label>Search: </label>
        <input onChange={(event) => this.capturaInput(event)} type="text" />
      </form>
    );
  }
}
