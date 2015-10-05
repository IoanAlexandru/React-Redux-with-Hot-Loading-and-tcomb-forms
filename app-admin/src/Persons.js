import React, { Component } from 'react'
import P from './Person'
import request from 'superagent'

export default class Persons extends Component {
	constructor(){
		super()
		this.handleChange = this.handleChange.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.state = {
			persons: [],
			searchWord: ""
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

	handleChange(){
		this.setState({
			searchWord: React.findDOMNode(this.refs.filterInput).value
		})
	}	

	render(){
		let self = this
		let persons = this.state.persons
					.filter(function(person){
						return person.name.toLowerCase().indexOf(self.state.searchWord.toLowerCase()) > -1;
 					})
 					.map(function(person){
						return <P key={Math.floor(Math.random() * 100000000) + 100} person={person} />
					});		
		return <div className="container-fluid">
				  <div className="row">
				  	<div className="col-md-4 col-md-offset-4">
				  		<input className="form-control" type="text" placeholder="Search persons by name" ref="filterInput" onChange={this.handleChange} />
				  	</div>
				  </div>		
				  <div className="row">
					<table className="table table-striped">
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
			   </div>
	}
}	
