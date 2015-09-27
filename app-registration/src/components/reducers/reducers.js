import { logText, addText, readText, removeAllTexts, filterText, emptyFilteredTexts, addPerson } from '../actions/actions';
import { LOG_TEXT, ADD_TEXT, READ_TEXT, REMOVE_ALL, FILTER_TEXT, EMPTY_FILTERED, ADD_PERSON } from '../constants/constants';

const initialState = {
  persons: [{
    name: "Ioan",
    surname: "Alexandru",
    email: "lordjedi32@yahoo.com",
    age: 27,
    gender: "Male"
  }, {
    name: "Petrache",
    surname: "Denisa",
    email: "deny.sa_md@yahoo.com",
    age: 21,
    gender: "Female"    
  }],
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
    	let selectedIndex;
    	for (var i in state.texts){
    		if(state.texts[i].id == action.id){
    			selectedIndex = i;
    		}
    	}
		return Object.assign({}, state, {
			texts: [
				...state.texts.slice(0, selectedIndex),
				Object.assign({}, state.texts[selectedIndex], {
					read: true
				}),
				...state.texts.slice(selectedIndex + 1)
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

