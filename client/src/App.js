import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import Navbar from './Components/Header';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <p>App.js</p>
        <Footer/>
      </div>
    );
  }
}

export default App;
