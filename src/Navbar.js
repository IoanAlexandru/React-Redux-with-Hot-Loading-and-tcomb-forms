import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
	constructor(){
		super();
	}

	render(){
		return <div>
				<h1>React - Redux - React Router</h1>
				<ul>
					<li>
						<Link to="/registration">Registration</Link>
					</li>
					<li>
						<Link to="/todo">Todo List</Link>
					</li>
				</ul>
				{this.props.children}
			   </div>
	}
}