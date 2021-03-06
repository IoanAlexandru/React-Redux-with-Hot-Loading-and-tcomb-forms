import {LOG_TEXT, ADD_TEXT, READ_TEXT, EDIT_TEXT , REMOVE_TODO ,REMOVE_ALL, ADD_PERSON, UPDATE_PERSONS} from '../constants/constants';

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

function readText(id){
	return {
		type: READ_TEXT,
		id
	}
}

function editText(id){
	return {
		type: EDIT_TEXT,
		id
	}
}

function removeTodo(id){
	return {
		type: REMOVE_TODO,
		id
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

function updatePersons(){
	return {
		type: UPDATE_PERSONS
	}
}

export default {
	logText,
	addText,
	readText,
	editText,
	removeTodo,
	removeAllTexts,
	addPerson,
	updatePersons
}