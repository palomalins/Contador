import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    numero : 0
  };

  add = () => {
    this.setState({
       numero : this.state.numero === 10 ? (this.state.numero = 10)
       : this.state.numero + 1 
    })
  };

  remove = () => {
    this.setState({
      numero : this.state.numero === 0 ? (this.state.numero = 0)
      : this.state.numero - 1 
  })
}

  render() {
    return (
      <div className="container">
        <button className="adiciona" onClick={this.add}>
          +
        </button>
        <h1>{this.state.numero}</h1>
        <button className="tira" onClick={this.remove}>
          -
        </button>
      </div>
)
    }
  }


export default App;