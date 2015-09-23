import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, NoMatch} from 'react-router';
import App from './App';
import Todo from './Todo';
import Navbar from './Navbar';
import textApp from './components/reducers/reducers';

let store = createStore(textApp);

const routes = {
  path: '/',
  component: Navbar,
  childRoutes: [
    { path: 'registration', component: App },
    { path: 'todo', component: Todo}
  ]
}

React.render(<Provider store={store}>
    {() => <Router>
	        <Route path="/" component={Navbar}>
	          <Route path="registration" component={App} />
	          <Route path="todo" component={Todo} />
	        </Route>
	      </Router>}
  </Provider>, document.getElementById('root'));
