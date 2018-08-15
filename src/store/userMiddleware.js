/**
 * Import
 */
import baseUrl from 'src/data/config';

import axios from 'axios';
import { LOAD_USER, LOAD_USER_VIEW, receivedUser, receivedUserView} from './reducer';


/**
 * Code
 */

/**
 * Middleware
 */
const userAxios = store => next => (action) => {
  switch (action.type) {
    case LOAD_USER: {
      const url = `${baseUrl}/api/users/${action.id}?displayGroup=profile`;
      axios
        .get(url)
        .then((response) => {
          // console.log(response.data[0]);
          store.dispatch(receivedUser(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case LOAD_USER_VIEW: {
      const url = `${baseUrl}/api/users/${action.id}?displayGroup=profile`;
      axios
        .get(url)
        .then((response) => {
          // console.log(response.data[0]);
          store.dispatch(receivedUserView(response.data));
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
export default userAxios;
