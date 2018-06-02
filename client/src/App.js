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
      todo: ['yeah']
    }
  }
  fetchTasks() {
    fetch('/todo')
      .then(resp => {
        if (!resp.ok) {
          throw Error('failure: ', resp.message);
        }
        return resp.json();
      }).then(data => this.setState ({
        todo: data.data
      })).catch(err => console.log(`failure: ${err}`))
  }

  componentDidMount() {
    this.fetchTasks();
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>

          <Route exact path='/todo' component={(props) => (
            <Todo
              {...props}
              todo={this.state.todo}/>
          )} />
        </Switch>
        <p>App.js</p>

        <Footer/>
      </div>
    );
  }
}

export default App;
