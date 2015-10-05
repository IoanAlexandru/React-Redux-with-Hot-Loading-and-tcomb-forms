import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import Navbar from './Navbar'
import Persons from './Persons'
import './main.css'

React.render(<Router>
	         <Route path="/" component={Navbar}>
	         	<IndexRoute component={Persons} />
	         </Route>
	        </Router>, document.getElementById('root'));