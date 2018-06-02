import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Todo extends Component {
	render() {
		return(
			<div>
				<h2>Todo</h2>

				{/* {this.props.todo.map(task => (

					<div Key={task.id}
						className='todo-list'>
						<div key={task.id}>
							<p>{task.task}</p>
							<Link to ={`todo/${task.id}`}>Edit task</Link>
						</div>
					</div> */}
				))}
			</div>
		)
	}
}

export default Todo;
