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
  ADD_TAG,
  ADD_BOOKMARK,
  receivedBookmarks,
  receivedFilters,
  noResults,
  loadBookmarks,
  loadFilters,
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
      const url = `${baseUrl}/api/bookmarks?displayGroup=bookmarks&orderField=created_at&sortType=desc`;

      // Requesting
      axios
        .get(url)
        .then((response) => {
          // Dispatch the data from response
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
          // Dispatch the data from response
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

      // Catch the state for direction
      const orderDirection = store.getState().main.direction;

      // Url requesting
      const isProfileView = store.getState().main.viewProfile;

      let url = '';
      if (isProfileView === 'own_bookmarks') {
        const idUser = store.getState().main.id_user_view;
        url = `${baseUrl}/api/users/${idUser}/bookmarks/user?displayGroup=bookmarks${support}${language}${level}${tag1}${tag2}${tag3}&orderField=${ordering}&sortType=${orderDirection}`;
      }
      else if (isProfileView === 'own_favorites') {
        const idUser = store.getState().main.id_user_view;
        url = `${baseUrl}/api/users/${idUser}/bookmarks/faved_by?displayGroup=bookmarks${support}${language}${level}${tag1}${tag2}${tag3}&orderField=${ordering}&sortType=${orderDirection}`;
      }
      else {
        url = `${baseUrl}/api/bookmarks?displayGroup=bookmarks${support}${language}${level}${tag1}${tag2}${tag3}&orderField=${ordering}&sortType=${orderDirection}`;
      }

      // Requesting
      axios
        .get(url)
        .then((response) => {
          // Dispatch the data from response
          store.dispatch(receivedBookmarks(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Dispatch for change ths state of results
          store.dispatch(noResults());
        });
      break;
    }


    // Add tag
    case ADD_TAG: {
      const url = `${baseUrl}/api/tags`;
      const prepareData = {
        label: action.values.tag,
      };
      axios
        .post(url, prepareData)
        .then(() => {
          store.dispatch(loadFilters());
        })
        .catch(() => {
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
          // console.error(error.response);
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
