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
import { setToken, loadBookmarks, loadFilters } from 'src/store/reducer';

/**
 * Code
 */
// const root = document.getElementById('root');
// const { token } = root.dataset;
// const decoded = jwtDecode(dataToken);
// console.log(decoded);
// store.dispatch(setToken(dataToken));

const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));

// store.dispatch(loadUser(2));
store.dispatch(loadFilters());
store.dispatch(loadBookmarks());
