import React, { Component } from 'react'

export default class P extends Component {
	constructor(){
		super()
	}

	render(){
		return <tr>
				<td>{this.props.person.name} {this.props.person.surname}</td>
				<td>{this.props.person.email}</td>
				<td>{this.props.person.age}, {this.props.person.gender}</td>
			   </tr>
	}
}