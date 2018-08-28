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
  LOAD_RESSOURCE,
  REQUEST_BOOKMARKS,
  ADD_TAG,
  ADD_BOOKMARK,
  EDIT_BOOKMARK,
  FAV_RESSOURCE,
  GET_VOTE,
  VOTE_UP,
  requestBookmarks,
  receivedBookmarks,
  receivedFilters,
  receivedRessource,
  noResults,
  loadBookmarks,
  loadFilters,
  loadRessource,
  showAddTag,
  showAddBookmark,
  showEditBookmark,
  dispatchVote,
  dispatchVoteid,
  dispatchVotesBookmark,
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
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
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
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
        });
      break;
    }

    // Loadind one ressource
    case LOAD_RESSOURCE: {
      // Url requesting for one ressource
      const url = `${baseUrl}/api/bookmarks/${action.id}?displayGroup=bookmark`;

      // Requesting
      axios
        .get(url)
        .then((response) => {
          // Dispatch the data from response
          store.dispatch(receivedRessource(response.data));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
          if (status === 404) {
            window.location.replace('/app/not_found');
          }
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
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
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
          store.dispatch(showAddTag());
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 400) {
            document.getElementById('tag-error').textContent = 'Désolé, ce tag existe déjà !';
          }
        });
      break;
    }

    // Add bookmark
    case ADD_BOOKMARK: {
      const url = `${baseUrl}/api/bookmarks`;
      const idUser = store.getState().main.id_user;
      const image = action.values.image || '/images/default.jpg';
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
      if (!(Number(action.values.select_tag2) === 0 || Number.isNaN(Number(action.values.select_tag2)))) {
        const addTag2 = {
          id: Number(action.values.select_tag2),
          entity: 'tag',
          property: 'tag',
        };
        prepareData.add.push(addTag2);
      }
      if (!(Number(action.values.select_tag3) === 0 || Number.isNaN(Number(action.values.select_tag3)))) {
        const addTag3 = {
          id: Number(action.values.select_tag3),
          entity: 'tag',
          property: 'tag',
        };
        prepareData.add.push(addTag3);
      }
      axios
        .post(url, prepareData)
        .then(() => {
          store.dispatch(loadBookmarks());
          store.dispatch(showAddBookmark());
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
          if (status === 400) {
            document.getElementById('add-bookmark-error').innerHTML = '';
            if (error.response.data.title !== undefined) {
              document.getElementById('add-bookmark-error').innerHTML += `<p>${error.response.data.title}</p>`;
            }
            if (error.response.data.url !== undefined) {
              document.getElementById('add-bookmark-error').innerHTML += `<p>${error.response.data.url}</p>`;
            }
          }
        });
      break;
    }

    // Edit bookmark
    case EDIT_BOOKMARK: {
      const idBookmark = action.values.id;
      const url = `${baseUrl}/api/bookmarks/${idBookmark}`;

      const currentBookmark = store.getState().main.bookmark;

      const image = action.values.image || '/images/default.jpg';

      const prepareData = {
        title: action.values.title,
        resume: action.values.resume,
        url: action.values.url,
        image,
        published_at: action.values.published_at,
        author: action.values.author,
        remove: [
          {
            id: currentBookmark.tags[0].id,
            entity: 'tag',
            property: 'tag',
          },
        ],
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
      if (typeof currentBookmark.tags[1] !== 'undefined') {
        const removeTag2 = {
          id: currentBookmark.tags[1].id,
          entity: 'tag',
          property: 'tag',
        };
        prepareData.remove.push(removeTag2);
      }
      if (typeof currentBookmark.tags[2] !== 'undefined') {
        const removeTag3 = {
          id: currentBookmark.tags[2].id,
          entity: 'tag',
          property: 'tag',
        };
        prepareData.remove.push(removeTag3);
      }
      if (!(Number(action.values.select_tag2) === 0 || Number.isNaN(Number(action.values.select_tag2)))) {
        const addTag2 = {
          id: Number(action.values.select_tag2),
          entity: 'tag',
          property: 'tag',
        };
        prepareData.add.push(addTag2);
      }
      if (!(Number(action.values.select_tag3) === 0 || Number.isNaN(Number(action.values.select_tag3)))) {
        const addTag3 = {
          id: Number(action.values.select_tag3),
          entity: 'tag',
          property: 'tag',
        };
        prepareData.add.push(addTag3);
      }
      axios
        .put(url, prepareData)
        .then(() => {
          store.dispatch(loadBookmarks());
          store.dispatch(showEditBookmark());
          store.dispatch(loadRessource(idBookmark));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
          if (status === 400) {
            document.getElementById('add-bookmark-error').innerHTML = '';
            if (error.response.data.title !== undefined) {
              document.getElementById('add-bookmark-error').innerHTML += `<p>${error.response.data.title}</p>`;
            }
            if (error.response.data.url !== undefined) {
              document.getElementById('add-bookmark-error').innerHTML += `<p>${error.response.data.url}</p>`;
            }
          }
        });
      break;
    }

    // Fav a ressource
    case FAV_RESSOURCE: {
      // Request
      const request = {
        [action.typeRequest]: [
          {
            'id': action.userId,
            'entity': 'user',
            'property': 'favedBy',
          },
        ],
      };
      // Url requesting for last bookmarks
      const url = `${baseUrl}/api/bookmarks/${action.bookmarkId}`;

      // Requesting
      axios
        .put(url, request)
        .then(() => {
          store.dispatch(requestBookmarks());
        })
        .catch((error) => {
          // console.error(error);
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
        });
      break;
    }

    // Get Vote for bookmark
    case GET_VOTE: {
      // Url requesting for last bookmarks
      const url = `${baseUrl}/api/votes/check?voter=${action.userId}&bookmark=${action.bookmarkId}`;

      // Requesting
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          // Dispatch the data from response
          store.dispatch(dispatchVote(response.data.value));
          store.dispatch(dispatchVoteid(response.data.id));
        })
        .catch((error) => {
          console.error(error);
          // const { status } = error.response;
          // if (status === 401) {
          //   window.location.replace('/');
          // }
        });
      break;
    }

    // Vote Up for bookmark
    case VOTE_UP: {
      if (action.method === 'post') {
        // Url requesting
        const url = `${baseUrl}/api/votes`;
        // Data
        const data = {
          'value': action.value,
          'add':
          [
            {
              'id': action.userId,
              'entity': 'user',
              'property': 'voter',
            },
            {
              'id': action.bookmarkId,
              'entity': 'bookmark',
              'property': 'bookmark',
            },
          ],
        };

        // Requesting
        axios
          .post(url, data)
          .then((response) => {
            console.log(response);
            // Dispatch the new vote id and value in the state
            store.dispatch(dispatchVoteid(response.data.id));
            store.dispatch(dispatchVote(response.data.value));
            // Adding the new vote in the state.bookmark.vote
            const newVote = {
              'id': response.data.id,
              'value': response.data.value,
            };
            store.dispatch(dispatchVotesBookmark(newVote));
            // Update bookmarks list
            store.dispatch(requestBookmarks());
          })
          .catch((error) => {
            console.log(data);
            console.error(error);
            // const { status } = error.response;
            // if (status === 401) {
            //   window.location.replace('/');
            // }
          });
      }

      else {
        // Url requesting
        const url = `${baseUrl}/api/votes/${action.voteId}`;
        // Requesting
        axios
          .delete(url)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
            // const { status } = error.response;
            // if (status === 401) {
            //   window.location.replace('/');
            // }
          });
      }

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
