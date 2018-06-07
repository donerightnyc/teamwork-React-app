import React, { Component } from 'react';
import TaskForm from './TaskForm';

class EditTask extends Component {
	render() {
		return (
			<div className="edit-task">
				<h3>EditTask</h3>
				<TaskForm
					task={this.props.event}
					id='edit-task'
					func={this.props.onSubmit}/>
			</div>
		)
	}
}

export default EditTask;
