import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
	constructor(){
		super()
	}

	render(){
		return <div>
				<ul className="nav navbar-nav">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/logout">Logout</a>
					</li>												
				</ul>
				<div className="clearfix"></div>
				<div className="container">
				{this.props.children}
				</div>
			   </div>
	}
}