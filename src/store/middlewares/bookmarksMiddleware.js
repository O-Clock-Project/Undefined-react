/**
 * Import
 */
import axios from 'axios';

/**
 * Local import
 */
import baseUrl from 'src/data/config';
import {
  LOAD_BOOKMARKS,
  LOAD_FILTERS,
  receivedBookmarks,
  receivedFilters,
} from '../reducer';


/**
 * Code
 */
/**
 * Middleware
 */
const bookmarksAxios = store => next => (action) => {
  // const token = store.getState().main.user_token;

  switch (action.type) {
    // Loading all bookmarks
    case LOAD_BOOKMARKS: {
      // Url requesting for all bookmarks
      const url = `${baseUrl}/api/bookmarks?displayGroup=bookmarks`;
      axios
        .get(url) /* , { headers: { Authorization: `Bearer ${token}` } } */
        .then((response) => {
          store.dispatch(receivedBookmarks(response.data));
        })
        .catch((error) => {
          console.log(error.response);
          // error.response.status === 401 ? window.location.replace("/") : '';
        });
      break;
    }

    // Loading all filters
    case LOAD_FILTERS: {
      // Url requesting for all filters
      const url = `${baseUrl}/api/filters?displayGroup=filters`;
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedFilters(response.data));
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
