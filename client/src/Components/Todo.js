import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return(
			<div className="list-container">
			<h2>Todo</h2>
				{this.props.todo.map(tdo => (
					<div key={tdo.id}
							 className='todo-list'>
							<p>{tdo.task}</p>
					</div>
				))}
			</div>
		)
	}
}

export default Todo;
