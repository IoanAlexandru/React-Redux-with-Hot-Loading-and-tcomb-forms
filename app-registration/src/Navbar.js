import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
	constructor(){
		super();
	}

	render(){
		return <div>
				<ul className="nav navbar-nav">
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
				<div className="clearfix">
				</div>
				<br/>
				<div className="container">
					{this.props.children}
				</div>
			   </div>
	}
}