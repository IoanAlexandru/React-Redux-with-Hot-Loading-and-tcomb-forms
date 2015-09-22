import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logText, addText, readText, removeAllTexts, addPerson} from './components/actions/actions';
import {Form, Person, options} from './components/form/form';
import './main.css';

class Text extends Component {
	constructor(){
		super();
		this.setTextToRead = this.setTextToRead.bind(this);
	}

	setTextToRead(){
		this.props.setTextToRead(this.props.index);
	}

	render(){
		let read;
		if(this.props.text.read){
			read = "Has been read";
		} else {
			read = "Hasn't been read";
		}
		return <p onClick={this.setTextToRead}>{this.props.text.name} - {read}</p>
	}
}

class App extends Component {
	constructor(){
		super();
		this.save = this.save.bind(this);
		this.onChange = this.onChange.bind(this);
		this.addTextToList = this.addTextToList.bind(this);
		this.removeTexts = this.removeTexts.bind(this);
		this.setTextToRead = this.setTextToRead.bind(this);
	}

	save(){
		let value = this.refs.form.getValue();
		this.props.dispatch(addPerson(value));
	}

	onChange(value, path) {
		this.refs.form.getComponent(path).validate();
	}

	addTextToList(){
		if(React.findDOMNode(this.refs.textInput).value.length){
			this.props.dispatch(addText(React.findDOMNode(this.refs.textInput).value));
		} else {
			alert("Insert some text to add");
		}		
		React.findDOMNode(this.refs.textInput).value = '';
	}	

	removeTexts(){
		this.props.dispatch(removeAllTexts());
	}

	setTextToRead(index){
		this.props.dispatch(readText(index));
	}

	render() {
	var self = this;
	return <div>
			<Form ref="form" type={Person} options={options} onChange={this.onChange}/>
			<button onClick={this.save}>Save</button>
			{
				this.props.persons.map(function(person){
					return <div key={Math.floor(Math.random() * 100000000) + 100}>
							<p>{person.name} {person.surname}</p>
							<p>{person.email}</p>
							<p>{person.age}, {person.gender}</p>
						   </div>
				})
			}
			<br/><br/>
			<input type="text" placeholder="Type here" ref="textInput"/>
			<button onClick={this.addTextToList}>Add text</button>
			<button onClick={this.removeTexts}>Remove all texts</button>
			{
				this.props.texts.map(function(text,index){
					return <Text key={text.name} index={index} setTextToRead={self.setTextToRead} text={text}/>
				})
			}			
	  	   </div>
	}
}

function select(state) {
  return {
  	texts: state.texts,
  	persons: state.persons
  };
}

export default connect(select)(App);