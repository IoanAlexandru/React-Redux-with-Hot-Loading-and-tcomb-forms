import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import textApp from './components/reducers/reducers';

let store = createStore(textApp);

React.render(<Provider store={store}>
    {() => <App />}
  </Provider>, document.getElementById('root'));
