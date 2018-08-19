import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import './Add.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Heading">Todo Application</h1>
        <Input/>
      </div>
    );
  }
}

export default App;
