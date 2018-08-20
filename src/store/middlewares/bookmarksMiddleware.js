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
  REQUEST_BOOKMARKS,
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
  switch (action.type) {
    // Loading last bookmarks
    case LOAD_BOOKMARKS: {
      // Url requesting for last bookmarks
      const url = `${baseUrl}/api/bookmarks?displayGroup=bookmarks`;

      // Requesting
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedBookmarks(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    // Loading all filters
    case LOAD_FILTERS: {
      // Url requesting for all filters
      const url = `${baseUrl}/api/filters?displayGroup=filters`;

      // Requesting
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

    // User request
    case REQUEST_BOOKMARKS: {
      // Catch the state for each select
      const selectSupport = store.getState().main.search_bookmark_form.select_type;
      const support = selectSupport === '' ? '' : `&support=${selectSupport}`;

      const selectLanguage = store.getState().main.search_bookmark_form.select_language;
      const language = selectLanguage === '' ? '' : `&locale=${selectLanguage}`;

      const selectLevel = store.getState().main.search_bookmark_form.select_level;
      const level = selectLevel === '' ? '' : `&difficulty=${selectLevel}`;

      const selectTag1 = store.getState().main.search_bookmark_form.select_tag1;
      const tag1 = selectTag1 === '' ? '' : `&tags[]=${selectTag1}`;

      const selectTag2 = store.getState().main.search_bookmark_form.select_tag2;
      const tag2 = selectTag2 === '' ? '' : `&tags[]=${selectTag2}`;

      const selectTag3 = store.getState().main.search_bookmark_form.select_tag3;
      const tag3 = selectTag3 === '' ? '' : `&tags[]=${selectTag3}`;

      // Catch the state for ordering
      const ordering = store.getState().main.search_bookmark_ordering;
      console.log(ordering);

      // Url requesting
      const url = `${baseUrl}/api/bookmarks?displayGroup=bookmarks${support}${language}${level}${tag1}${tag2}${tag3}&orderField=${ordering}`;

      // Requesting
      axios
        .get(url)
        .then((response) => {
          console.log(response);
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
