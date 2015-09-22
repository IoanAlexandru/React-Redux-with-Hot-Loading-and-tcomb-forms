import {logText, addText, readText, removeAllTexts, addPerson} from '../actions/actions';
import {LOG_TEXT, ADD_TEXT, READ_TEXT, REMOVE_ALL, ADD_PERSON} from '../constants/constants';

const initialState = {
	persons: [],
	texts: [
		{name: "Doing something", read: false}
	]
}

export default function textApp(state= initialState, action){
	switch(action.type){
		case ADD_PERSON: 
			return Object.assign({}, state, {
				persons: [...state.persons, {
					name: action.person.name,
					surname: action.person.surname,
					email: action.person.email,
					age: action.person.age,
					gender: action.person.gender
				}]
			});
		case ADD_TEXT:
			return Object.assign({}, state, {
		      texts: [...state.texts, {
		      	name: action.text,
		      	read: false
		      }]
		    });  
		case READ_TEXT: 
			return Object.assign({}, state, {
				texts: [
					...state.texts.slice(0, action.index),
					Object.assign({}, state.texts[action.index], {
						read: true
					}),
					...state.texts.slice(action.index + 1)
				]
			}); 
		case LOG_TEXT:
			console.log(action.text);
			return state;
		case REMOVE_ALL:
			return Object.assign({}, state, {
				texts: []
			});
		default:
			return state;
	}
}