import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, NoMatch} from 'react-router';
import App from './App';
import Todo from './Todo';
import Navbar from './Navbar';
import textApp from './components/reducers/reducers';
import 'babel-core/polyfill';

let store = createStore(textApp);

React.render(<Provider store={store}>
    { () => <Router>
	         <Route path="/" component={Navbar}>
	          <IndexRoute component={App} />
	          <Route path="todo" component={Todo} />
	         </Route>
	        </Router>
	}
  </Provider>, document.getElementById('root'));
