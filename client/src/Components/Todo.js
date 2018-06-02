import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Todo extends Component {
	render() {
		console.log(this.props.todo);
		return(
			<div>
			<h2>Todo</h2>
				{this.props.todo.map(tdo => (
					<div Key={tdo.todo}
							 className='todo-list'>
							 <p>d</p>
							<p>{tdo.id}</p>
							<p>{tdo.todo}</p>
							<p>{tdo.tdo}</p>
							<p>{tdo.task}</p>
							<p>{tdo.task}</p>
					</div>
				))}
			</div>
		)
	}
}

export default Todo;
