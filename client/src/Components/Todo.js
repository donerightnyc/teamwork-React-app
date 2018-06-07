import React, { Component } from 'react';
import TaskForm from './TaskForm';
import SingleTask from './SingleTask';
import CreateTask from './CreateTask';
import EditTask from './EditTask';

class Todo extends Component {

	render() {
		return(
			<div className="list-container">
				<h2>Todo</h2>

				<TaskForm
					id='create-task'
					func={this.props.onSubmit}
					task={this.props.task}
				  />

					{this.props.todo.map(tdo => (
						<div key={tdo.id}
								 className='todo-list'>

								<p>{tdo.task}</p>

								<EditTask/>
								<SingleTask/>
						</div>
				))}
			</div>
		)
	}
}

export default Todo;
