import React, { Component } from 'react';

export default class Text extends Component {
	constructor(){
		super();
		this.setTextToRead = this.setTextToRead.bind(this);
		this.editText = this.editText.bind(this)
		this.removeTodo = this.removeTodo.bind(this)
	}

	setTextToRead(){
		this.props.setTextToRead(this.props.text.id);
	}

	editText(){
		this.props.editText(this.props.text.id)
	}

	removeTodo(){
		this.props.removeTodo(this.props.text.id)
	}

	render(){
		let read;
		if(this.props.text.read){
			read = "Has been read";
		} else {
			read = "Hasn't been read";
		}
		return <tr>
				<td>{this.props.text.name} - {read}</td>
				<td onClick={this.setTextToRead}><button className="btn btn-info">Complete todo</button></td>
				<td onClick={this.editText}><button className="btn btn-info">Edit todo</button></td>
				<td onClick={this.removeTodo}><button className="btn btn-danger">Remove todo</button></td>
				<div id="myModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Modal Header</h4>
				      </div>
				      <div className="modal-body">
				        <p>Some text in the modal.</p>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				      </div>
				    </div>

				  </div>
				</div>				
			   </tr>
	}
}