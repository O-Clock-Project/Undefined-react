/**
 * NPM import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

/**
 * Local import
 */
import App from 'src/components/App';

// store
import store from 'src/store';
import {
  loadUser, loadBookmarks, loadFilters, loadSchoolLinks, // setToken,
} from 'src/store/reducer';

/**
 * Code
 */
// const root = document.getElementById('root');
// const { token } = root.dataset;
// const decoded = jwtDecode(token);
// console.log(decoded);
// store.dispatch(setToken(token));

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
store.dispatch(loadSchoolLinks());
