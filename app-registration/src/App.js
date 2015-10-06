import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import Text from './Text';
import {addPerson, updatePersons} from './components/actions/actions';
import {Form, Person, options} from './components/form/form';
import P from './Person'

class App extends Component {
	constructor(){
		super()
		this.save = this.save.bind(this)
		this.onChange = this.onChange.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.componentDidUpdate = this.componentDidUpdate.bind(this)
		this.state = {
			searchWord: '',
			message: ''
		}
	}

	componentDidMount(){

	}

	componentDidUpdate(){
		let persons = this.props.persons;		
		request
			.post('/addpersons')
			.send(persons)
			.end(function(err,res){
				if(err){
					console.log(err);
				} else {
					console.log(res);
				}
			})

	}

	save(){
		let value = this.refs.form.getValue();
		this.props.dispatch(addPerson(value));
		this.setState({
			message: 'Person saved'
		})
	}

	onChange(value, path) {
		this.refs.form.getComponent(path).validate();
	}

	render() {	
		return <div className="container">
				<Form ref="form" type={Person} options={options} onChange={this.onChange}/>
				<p>
					<button className="btn btn-lg btn-info" onClick={this.save}>Save</button>	
				</p>	
				<p>{this.state.message}</p>			
		  	   </div>
		}
}

function select(state) {
  return {
  	persons: state.persons
  };
}

export default connect(select)(App);