import { logText, addText, readText, removeAllTexts, filterText, emptyFilteredTexts, addPerson } from '../actions/actions';
import { LOG_TEXT, ADD_TEXT, READ_TEXT, REMOVE_ALL, FILTER_TEXT, EMPTY_FILTERED, ADD_PERSON } from '../constants/constants';

const initialState = {
  persons: [],
  texts: [
    {
      name: "Doing something",
      read: false,
      id: Math.floor(Math.random() * 1000000) + 100
    },
	{
	  name: "x",
      read: false,
      id: Math.floor(Math.random() * 1000000) + 100	  
	}
	]
}

export default function textApp(state = initialState, action) {
  switch (action.type) {
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
          read: false,
          id: Math.floor(Math.random() * 1000000) + 100
		      }]
      });
    case READ_TEXT:
	  for (var i = 0; i < state.texts.length; i++) {
	    if (i == action.index && state.texts[i].id == action.id) {
			return Object.assign({}, state, {
				texts: [
					...state.texts.slice(0, action.index),
					Object.assign({}, state.texts[action.index], {
						read: true
					}),
					...state.texts.slice(action.index + 1)
				]			
			});			
	    } else {
	      console.log(i, action.index,"False");
	      return state;	
	    }
	  }    	
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

