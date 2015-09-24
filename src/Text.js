import React, { Component } from 'react';

export default class Text extends Component {
	constructor(){
		super();
		this.setTextToRead = this.setTextToRead.bind(this);
	}

	setTextToRead(){
		this.props.setTextToRead(this.props.text.id);
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