import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
	constructor(){
		super()
	}

	render(){
		return <div>
				<h1>App Admin</h1>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>							
					<li>
						<Link to="/persons">Persons</Link>
					</li>
				</ul>
				{this.props.children}
			   </div>
	}
}