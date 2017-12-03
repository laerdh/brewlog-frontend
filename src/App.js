import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Brewlog from './containers/Brewlog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <hr className="featurette header-divider"/>
          <Brewlog />
          <hr className="featurette footer-divider"/>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
