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
import bookmarksMiddleware from 'src/store/middlewares/bookmarksMiddleware';

/*
 * Code
 */
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const appliedMiddleware = applyMiddleware(userMiddleware, bookmarksMiddleware);
const enhancers = compose(appliedMiddleware, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
