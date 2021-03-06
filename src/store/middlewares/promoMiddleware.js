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
  // const token = store.getState().main.user_token;

  switch (action.type) {
    // Load user data connect
    case LOAD_PROMO: {
      const idPromo = action.id;
      const url = `${baseUrl}/api/promotions/${idPromo}?displayGroup=promotion`;
      axios
        .get(url) // , { headers: { Authorization: `Bearer ${token}` } }
        .then((response) => {
          store.dispatch(receivedPromo(response.data));
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 401) {
            window.location.replace('/');
          }
          // if (status === 404) {
          //   window.location.replace('/app/not_found');
          // }
        });
      break;
    }

    case LOAD_SCHOOL_LINKS: {
      const url = `${baseUrl}/api/promotions/1?displayGroup=promotion`;
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
          // if (status === 404) {
          //   window.location.replace('/app/not_found');
          // }
        });
      break;
    }

    case LOAD_ANNOUNCES: {
      const idPromo = action.id;
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
          // if (status === 404) {
          //   window.location.replace('/app/not_found');
          // }
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
          // if (status === 404) {
          //   window.location.replace('/app/not_found');
          // }
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
          // if (status === 404) {
          //   window.location.replace('/app/not_found');
          // }
        });
      break;
    }

    case ADD_COMMENT: {
      const url = `${baseUrl}/api/comments`;
      const idUser = store.getState().main.id_user;
      const idPromo = store.getState().main.promo.id;
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
      axios
        .post(url, prepareData)
        .then(() => {
          store.dispatch(loadComments(action.values.idAnnounce));
          store.dispatch(loadAnnounces(idPromo));
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
