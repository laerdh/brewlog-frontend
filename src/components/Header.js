import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 id="logo">Ledahl Nanobrewery</h1>
        <div id="navHeader">
          <ul id="nav">
            <li id="btnCheer"><b>Cheers!</b></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;