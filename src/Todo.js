import React, {Component} from 'react';
import {connect} from 'react-redux';
import Text from './Text';
import {logText, addText, readText, removeAllTexts} from './components/actions/actions';
import './main.css';

class Todo extends Component {
	constructor(){
		super();
		this.addTextToList = this.addTextToList.bind(this);
		this.removeTexts = this.removeTexts.bind(this);
		this.setTextToRead = this.setTextToRead.bind(this);
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

	render(){
		var self = this;
		return <div>
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
  	texts: state.texts
  };
}

export default connect(select)(Todo);
