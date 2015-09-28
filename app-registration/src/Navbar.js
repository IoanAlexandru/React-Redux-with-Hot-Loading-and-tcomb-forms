import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
	constructor(){
		super();
	}

	render(){
		return <div>
				<h1>App Registration and Todo List</h1>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>							
					<li>
						<Link to="/">Registration</Link>
					</li>
					<li>
						<Link to="/todo">Todo List</Link>
					</li>
				</ul>
				{this.props.children}
			   </div>
	}
}