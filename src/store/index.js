/*
 * Npm import
 */
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { reducer as formReducer } from 'redux-form';

/*
 * Local import
 */
// Reducer
import mainReducer from 'src/store/reducer';

// Middlewares
import userMiddleware from 'src/store/middlewares/userMiddleware';
import bookmarksMiddleware from 'src/store/middlewares/bookmarksMiddleware';
import promoMiddleware from 'src/store/middlewares/promoMiddleware';

/*
 * Code
 */
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const appliedMiddleware = applyMiddleware(userMiddleware, bookmarksMiddleware, promoMiddleware);
const enhancers = compose(appliedMiddleware, ...devTools);

const reducers = {
  main: mainReducer,
  form: formReducer,
};

// createStore
const reducer = combineReducers(reducers);
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
