/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';
import userMiddleware from 'src/store/userMiddleware';

/*
 * Code
 */
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const appliedMiddleware = applyMiddleware(userMiddleware);
const enhancers = compose(appliedMiddleware, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
