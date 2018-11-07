import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <ul>
            <li><a href="/hello">Hello</a></li>
          </ul>
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
