/**
 * Import
 */
import axios from 'axios';

/**
 * Local import
 */
import baseUrl from 'src/data/config';
import { LOAD_BOOKMARKS, receivedBookmarks } from '../reducer';


/**
 * Code
 */

/**
 * Middleware
 */
const bookmarksAxios = store => next => (action) => {
  switch (action.type) {
    case LOAD_BOOKMARKS: {
      const url = `${baseUrl}/api/bookmarks?displayGroup=bookmarks`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          store.dispatch(receivedBookmarks(response.data));
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
