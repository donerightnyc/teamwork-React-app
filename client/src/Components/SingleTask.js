import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: Object.assign({
				task: '',
			}, props.event)
		}
	}

	editTask(id) {
		this.props.history.push(`/${id}`);
	}
	render() {
		const { task, id } = this.state.event
		return(
			<div className="single-task">
				<h4>Single tassk</h4>
				<p>{task}</p>
				<Link to={`/${id}/edit`}><button>Edit Task</button></Link>
				<Link to="/"><button onClick={this.props.del}>Delete</button></Link>
			</div>
		)
	}
}

export default SingleTask;
