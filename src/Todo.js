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
		this.filterTexts = this.filterTexts.bind(this);
		this.state = {
			searchWord: ''
		}
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

	setTextToRead(id){
		this.props.dispatch(readText(id));
	}	

	filterTexts(){ 		
		this.setState({
			searchWord: React.findDOMNode(this.refs.filterInput).value
		})
	}

	render(){
		let self = this;
		let texts = [];
		texts = this.props.texts
					.filter(function(text){
						return text.name.toLowerCase().indexOf(self.state.searchWord.toLowerCase()) > -1;
 					})
 					.map(function(text,index){
						return <Text key={text.name} index={index} setTextToRead={self.setTextToRead} text={text}/>
					});
		
		return <div>
				<input type="text" placeholder="Type here to add text" ref="textInput"/>
				<button onClick={this.addTextToList}>Add text</button>
				<button onClick={this.removeTexts}>Remove all texts</button>
				<br/>
				<input type="text" placeholder="Type here to find texts" ref="filterInput" onChange={this.filterTexts}/>
				<h3>Filtered text list</h3>	
				{texts}																	
			   </div>
	}
}

function select(state) {
  return {
  	texts: state.texts
  };
}

export default connect(select)(Todo);
