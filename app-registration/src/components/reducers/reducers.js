import request from 'superagent'
import { logText, addText, readText, editText, removeTodo, removeAllTexts, filterText, emptyFilteredTexts, addPerson, updatePersons } from '../actions/actions';
import { LOG_TEXT, ADD_TEXT, READ_TEXT, EDIT_TEXT, REMOVE_TODO, REMOVE_ALL, FILTER_TEXT, EMPTY_FILTERED, ADD_PERSON, UPDATE_PERSONS } from '../constants/constants';

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
    case UPDATE_PERSONS: {
      request
        .get('/persons')
        .end(function(err, res){
          if(err){
            console.log(err)
            return state
          } else {
            // console.log(res.body)
            return Object.assign({}, state, {
              persons: res.body
            })
          }
        })
    }
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

      let newTexts = state.texts
      newTexts[selectedIndex].read = true

  		return Object.assign({}, state, {
  			texts: [...newTexts]
  		});		

    case EDIT_TEXT: 
      let selectedIndexTwo;
      for (var i in state.texts){
        if(state.texts[i].id == action.id){
          selectedIndexTwo = i;
        }
      }	

      let newTextsTwo = state.texts
      newTextsTwo[selectedIndexTwo].name = "Banjo"

      return Object.assign({}, state, {
        texts: [...newTextsTwo]
      }); 

    case REMOVE_TODO: 
      let selectedIndexThree;
      for (var i in state.texts){
        if(state.texts[i].id == action.id){
          selectedIndexThree = i;
        }
      } 

      let newTextsThree = state.texts
      newTextsThree.splice(selectedIndexThree, 1)

      return Object.assign({}, state, {
        texts: [...newTextsThree]
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

