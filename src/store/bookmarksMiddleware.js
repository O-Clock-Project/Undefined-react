/**
 * Import
 */
import axios from 'axios';

/**
 * Local import
 */
import baseUrl from 'src/data/config';
import { LOAD_USER } from './reducer';


/**
 * Code
 */

/**
 * Middleware
 */
const bookmarksAxios = store => next => (action) => {
  switch (action.type) {
    case LOAD_USER: {
      const url = `${baseUrl}/api/users/${action.id}?displayGroup=profile`;
      axios
        .get(url)
        .then((response) => {
          console.log(store);
          console.log(response);
          // store.dispatch(receivedUser(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    default:
      break;
  }

  // Passage au voisin
  next(action);
};

/**
 * Export
 */
export default bookmarksAxios;
