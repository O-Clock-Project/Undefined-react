/**
 * NPM import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/components/App';

// store
import store from 'src/store';
import { loadUser, loadBookmarks, loadFilters } from 'src/store/reducer';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));

store.dispatch(loadUser(1));
store.dispatch(loadFilters());
store.dispatch(loadBookmarks());
