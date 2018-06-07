import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return(
			<nav className="nav-bar">
				<Link to='/api/todo'>
					<li className="nav-li">Todo</li>
				</Link>
				<Link to='/api/todo/new'>
					<li className="nav-li">New</li>
				</Link>
			</nav>
		)
	}
}

export default Navbar;
