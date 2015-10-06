import React, {Component} from 'react';
import {connect} from 'react-redux';
import Text from './Text';
import {logText, addText, readText, editText, removeTodo, removeAllTexts} from './components/actions/actions';

class Todo extends Component {
	constructor(){
		super();
		this.addTextToList = this.addTextToList.bind(this);
		this.removeTexts = this.removeTexts.bind(this);
		this.setTextToRead = this.setTextToRead.bind(this);
		this.filterTexts = this.filterTexts.bind(this);
		this.editText = this.editText.bind(this)
		this.removeTodo = this.removeTodo.bind(this)
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

	editText(id){
		this.props.dispatch(editText(id))
	}

	removeTodo(id){
		this.props.dispatch(removeTodo(id))
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
						return <Text key={text.id} index={index} editText={self.editText} removeTodo={self.removeTodo} setTextToRead={self.setTextToRead} text={text}/>
					});
		
		return <div className="container">
				<div className="row">
					<div className="col-md-4">
						<input className="form-control" type="text" placeholder="Type here to add text" ref="textInput"/>
					</div>
					<div className="col-md-4">
						<input className="form-control" type="text" placeholder="Type here to search texts" ref="filterInput" onChange={this.filterTexts}/>				
					</div>						
					<div className="col-md-4">
						<div className="row btn-group">
							<button className="btn btn-info" onClick={this.addTextToList}>Add text</button>
							<button className="btn btn-danger" onClick={this.removeTexts}>Remove all texts</button>				
						</div>					
					</div>				
				</div>			
				<div className="row text-center">
					<h2>Filtered text list</h2>	
					<table className="table table-striped">
						<thead>
							<th>Todo</th>
							<th>Complete</th>
							<th>Edit</th>
							<th>Remove</th>
						</thead>
						<tbody>
							{texts}
						</tbody>
					</table>					
				</div>																
			   </div>
	}
}

function select(state) {
  return {
  	texts: state.texts
  };
}

export default connect(select)(Todo);
