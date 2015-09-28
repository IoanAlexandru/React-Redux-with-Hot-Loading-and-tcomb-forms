import React, { Component } from 'react'
import P from './Person'
import request from 'superagent'

export default class Persons extends Component {
	constructor(){
		super()
		this.componentDidMount = this.componentDidMount.bind(this)
		this.state = {
			persons: [{
					    name: "Ioan",
					    surname: "Alexandru",
					    email: "lordjedi32@yahoo.com",
					    age: 27,
					    gender: "Male"
					  }, {
					    name: "Petrache",
					    surname: "Denisa",
					    email: "deny.sa_md@yahoo.com",
					    age: 21,
					    gender: "Female"    
					  }]
		}
	}

	componentDidMount(){
		let self = this;
		request
			.get('/persons')
			.end(function(err, res){
				if(err){
					console.log(err);
				} else {
					self.setState({
						persons: res.body
					})
				}
			})
	}



	render(){
		let persons = this.state.persons.map(function(person){
						return <P key={Math.floor(Math.random() * 100000000) + 100} person={person} />
					})
		return <div>
				<table>
					<thead>
						<tr>
							<th>Name and surname</th>
							<th>Email</th>
							<th>Age and gender</th>
						</tr>
					</thead>
					<tbody>
						{persons}
					</tbody>
				</table>	
			   </div>
	}
}	