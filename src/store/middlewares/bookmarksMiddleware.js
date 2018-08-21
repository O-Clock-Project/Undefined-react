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
  ADD_BOOKMARK,
  receivedBookmarks,
  receivedFilters,
  loadBookmarks,
} from '../reducer';


/**
 * Code
 */

/**
 * Middleware
 */
const bookmarksAxios = store => next => (action) => {
  switch (action.type) {
    // Loading all bookmarks
    case LOAD_BOOKMARKS: {
      // Url requesting for all bookmarks
      const url = `${baseUrl}/api/bookmarks?displayGroup=bookmarks`;
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

    // Add bookmark
    case ADD_BOOKMARK: {
      const url = `${baseUrl}/api/bookmarks`;
      const idUser = store.getState().main.id_user;
      const image = action.values.image || './assets/images/default.jpg';
      const prepareData = {
        title: action.values.title,
        resume: action.values.resume,
        url: action.values.url,
        image,
        published_at: action.values.published_at,
        author: action.values.author,
        add: [
          {
            id: action.values.select_type,
            entity: 'support',
            property: 'support',
          },
          {
            id: action.values.select_level,
            entity: 'difficulty',
            property: 'difficulty',
          },
          {
            id: idUser,
            entity: 'user',
            property: 'user',
          },
          {
            id: action.values.select_language,
            entity: 'locale',
            property: 'locale',
          },
          {
            id: action.values.select_tag1,
            entity: 'tag',
            property: 'tag',
          },
        ],
      };
      if (action.values.select_tag2 !== undefined) {
        const tag2 = {
          id: action.values.select_tag2,
          entity: 'tag',
          property: 'tag',
        };
        prepareData.add.push(tag2);
      }
      if (action.values.select_tag3 !== undefined) {
        const tag3 = {
          id: action.values.select_tag3,
          entity: 'tag',
          property: 'tag',
        };
        prepareData.add.push(tag3);
      }
      axios
        .post(url, prepareData)
        .then(() => {
          store.dispatch(loadBookmarks());
        })
        .catch((error) => {
          console.error(error.response);
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
