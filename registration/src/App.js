import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './Text';
import {addPerson} from './components/actions/actions';
import {Form, Person, options} from './components/form/form';
import './main.css';

class App extends Component {
	constructor(){
		super();
		this.save = this.save.bind(this);
		this.onChange = this.onChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			searchWord: ""
		}
	}

	save(){
		let value = this.refs.form.getValue();
		this.props.dispatch(addPerson(value));
	}

	onChange(value, path) {
		this.refs.form.getComponent(path).validate();
	}

	handleChange(){
		this.setState({
			searchWord: React.findDOMNode(this.refs.filterInput).value
		})
	}

	render() {
		var self = this;
		let persons = this.props.persons
					.filter(function(person){
						return person.name.toLowerCase().indexOf(self.state.searchWord.toLowerCase()) > -1;
 					})
 					.map(function(person){
						return <div key={Math.floor(Math.random() * 100000000) + 100}>
								<p>{person.name} {person.surname}</p>
								<p>{person.email}</p>
								<p>{person.age}, {person.gender}</p>
							   </div>
					});		
		return <div>
				<Form ref="form" type={Person} options={options} onChange={this.onChange}/>
				<button onClick={this.save}>Save</button>	
				<br/>
				<input type="text" placeholder="Search persons by name" ref="filterInput" onChange={this.handleChange}/>	
				{persons}				
		  	   </div>
		}
}

function select(state) {
  return {
  	persons: state.persons
  };
}

export default connect(select)(App);