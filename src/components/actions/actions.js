import {LOG_TEXT, ADD_TEXT, READ_TEXT, REMOVE_ALL, ADD_PERSON} from '../constants/constants';

function logText(text){
	return {
		type: LOG_TEXT,
		text: text
	}
}

function addText(text){
	return {
		type: ADD_TEXT,
		text: text
	}
}

function readText(index){
	return {
		type: READ_TEXT,
		index: index
	}
}

function removeAllTexts(){
	return {
		type: REMOVE_ALL
	}
}

function addPerson(personToAdd){
	return {
		type: ADD_PERSON,
		person: personToAdd
	}
}

export default {
	logText,
	addText,
	readText,
	removeAllTexts,
	addPerson
}