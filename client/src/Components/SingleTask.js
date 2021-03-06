import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: Object.assign({
				task: '',
			}, props.task)
		}
	}

	editTask(id) {
		this.props.history.push(`/api/todo/${id}`);
	}

	render() {
		const { task, id } = this.state.task
		return(
			<div className="single-task">
				<h4></h4>
				<p>{task}</p>
				<Link to={`/api/todo/${id}/edit`}><button>Edit Task</button></Link>
				<Link to="/api/todo"><button onClick={this.props.del}>Delete</button></Link>
			</div>
		)
	}
}

export default SingleTask;
