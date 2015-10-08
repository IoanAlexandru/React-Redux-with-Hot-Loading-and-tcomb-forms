import { createStore, applyMiddleware  } from 'redux'
import textApp from '../reducers/reducers';
import createLogger from 'redux-logger'
import todoApp from '../reducers/reducers'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk/*, promise*/, logger)(createStore);
const store = createStoreWithMiddleware(todoApp);

console.log(store);