import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Useritem from './components/users/Useritem'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <Useritem/>
      </div>
    );
  }
}

export default App;
