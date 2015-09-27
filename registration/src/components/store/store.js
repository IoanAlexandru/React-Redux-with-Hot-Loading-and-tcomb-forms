import {createStore} from 'redux';
import textApp from '../reducers/reducers';

let store = createStore(textApp);
console.log(store);