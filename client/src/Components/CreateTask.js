import React, { Component } from 'react';
import TaskForm from './TaskForm';

class CreateTask extends Component {
	render() {

		return (
			<div className="create-task">
				<h3>CreateTask</h3>
				<TaskForm
					id='create-task'
					func={this.props.onSubmit}/>
			</div>
		)
	}
}

export default CreateTask;
