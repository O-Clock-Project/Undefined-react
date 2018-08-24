/**
 * Import
 */
import axios from 'axios';
import { reset } from 'redux-form';


/**
 * Local import
 */
import baseUrl from 'src/data/config';
import {
  LOAD_PROMO,
  LOAD_SCHOOL_LINKS,
  LOAD_ANNOUNCES,
  LOAD_ANNOUNCE,
  LOAD_COMMENTS,
  ADD_COMMENT,
  receivedPromo,
  receivedSchoolLinks,
  loadAnnounces,
  receivedAnnounces,
  loadAnnounce,
  receivedAnnounce,
  loadComments,
  receivedComments,
} from '../reducer';


/**
 * Code
 */

/**
 * Middleware
 */
const promoAxios = store => next => (action) => {
  switch (action.type) {
    // Load user data connect
    case LOAD_PROMO: {
      const idPromo = action.id;
      const url = `${baseUrl}/api/promotions/${idPromo}?displayGroup=promotion`;
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedPromo(response.data));
          store.dispatch(loadAnnounces());
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
        });
      break;
    }

    case LOAD_SCHOOL_LINKS: {
      const url = `${baseUrl}/api/promotions/4?displayGroup=promotion`;
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedSchoolLinks(response.data.links));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
        });
      break;
    }

    case LOAD_ANNOUNCES: {
      const idPromo = store.getState().main.promo.id;
      const url = `${baseUrl}/api/promotions/${idPromo}/announcements/promotions?displayGroup=announcements&frozen=false`;
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedAnnounces(response.data));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
        });
      break;
    }

    case LOAD_ANNOUNCE: {
      const idAnnounce = action.id;
      const url = `${baseUrl}/api/announcements/${idAnnounce}?displayGroup=announcement`;
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedAnnounce(response.data));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
        });
      break;
    }

    case LOAD_COMMENTS: {
      const idAnnounce = action.id;
      const url = `${baseUrl}/api/announcements/${idAnnounce}/comments/announcement?displayGroup=comments&orderField=created_at&sortType=ASC`;
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedComments(response.data));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
        });
      break;
    }

    case ADD_COMMENT: {
      const url = `${baseUrl}/api/comments`;
      const idUser = store.getState().main.id_user;
      const prepareData = {
        body: action.values.comment,
        add: [
          {
            id: idUser,
            entity: 'user',
            property: 'author',
          },
          {
            id: action.values.idAnnounce,
            entity: 'announcement',
            property: 'announcement',
          },
        ],
      };
      console.log(action.values);
      axios
        .post(url, prepareData)
        .then(() => {
          store.dispatch(loadComments(action.values.idAnnounce));
          store.dispatch(loadAnnounces());
          store.dispatch(loadAnnounce(action.values.idAnnounce));
          store.dispatch(reset('promoAddComment'));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
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
export default promoAxios;
