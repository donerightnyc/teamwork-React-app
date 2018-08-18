import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CreateTask from './Components/CreateTask';
import EditTask from './Components/EditTask';
import Navbar from './Components/Header';
import SingleTask from './Components/SingleTask';
import Todo from './Components/Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
    this.findTask = this.findTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  fetchTasks() {
    fetch('/api/todo')
      .then(resp => {
        if (!resp.ok) {
          throw Error('fetch failure: ', resp.message);
        }
        return resp.json();
      }).then(data => this.setState ({
        todo: data.data
      })).catch(err => console.log(`failure: ${err}`))
  }

  findTask(id) {
    const task = this.state.todo.filter(t => (t.id === parseInt(id, 10)));//I am not sure how this line works
    return task[0]
  }

  createTask(task) {
    fetch('/api/todo/new', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resBody => {
      this.setState((prevState, props) => {
        return {
          todo: prevState.task.concat(resBody.data)
        }
      })
    })
  }

  updateTask(task) {
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    };
    const URL = `/api/todo/${task.id}`;
    fetch(URL, options).then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
  }

  deleteTask(id) {
    fetch(`/api/todo/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      this.setState((prevState, props) => {
        return {
          todo: prevState.todo.filter(task => task.id !== id)
        }
      })
    })
  }

  handleDelete(id) {
    this.deleteTask(id);
    window.location.reload();
  }

  componentDidMount() {
    this.fetchTasks();
  }
  render() {
    return (
      <div className='App'>
        <Navbar/>

        <Switch>

          <Route exact path='/api/todo/new'
          component={() => (
            <CreateTask
              onSubmit={this.createTask.bind(this)} />
          )} />

          <Route exact path='/api/todo/:id/edit'
          component={(props) => (
            <EditTask
              {...props}
              task={this.findTask(props.match.params.id)}
              onSubmit={this.updateTask.bind(this)} />
          )} />

          <Route path='/api/todo/:id'
          component={(props) => (
            <SingleTask
            {...props}
            task={this.findTask(props.match.params.id)}
            del={() =>
            this.handleDelete(props.match.params.id)}/>
          )} />

          <Route exact path='/api/todo' component={(props) => (
            <Todo
              {...props}
              todo={this.state.todo}/>
            )}  />

        </Switch>
      </div>
    );
  }
}

export default App;
