import React, { Component } from 'react';
import Try from './Try.js';
import On from './Try.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <strong>
          <h2>Welcome to React</h2>
          </strong>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Try title = "React" body = "A simple App" imageUrl = "" isOpen ={false}/>
        {/* <On /> */}
      </div>
    );
  }
}

export default App;
