import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    return fetch('localhost:3000/denver')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CityAPI</h1>
          <p className="app-description">An api for collecting information about cities and returning it JSON for use all over the web.</p>
        </header>
        <p className="path-builder">Test</p>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
