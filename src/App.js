import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Brewlog from './containers/Brewlog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ledahl Nanobrewery</h1>
        </header>
        <Brewlog />
      </div>
    );
  }
}

export default App;
