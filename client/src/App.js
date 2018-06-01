import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Todo from './Components/Todo';
import Navbar from './Components/Header';
import Footer from './Components/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }
  fetchTasks() {
    fetch('/task')
      .then(resp => {
        if (!resp.ok) {
          throw Error('failure: ', resp.message);
        }
        return resp.json();
      }).then(data => this.setState ({
        tasks: data.data
      })).catch(err => console.log(`error: ${err}`))
  }

  componentDidMount() {
    this.fetchTasks();
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <p>App.js</p>
        <Todo/>
        <Footer/>
      </div>
    );
  }
}

export default App;
