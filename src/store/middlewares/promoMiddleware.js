/**
 * Import
 */
import axios from 'axios';


/**
 * Local import
 */
import baseUrl from 'src/data/config';
import {
  LOAD_PROMO, LOAD_SCHOOL_LINKS, receivedPromo, receivedSchoolLinks,
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
