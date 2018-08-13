/**
 * Import
 */
import axios from 'axios';
import { LOAD_USER, receivedUser } from './reducer';

/**
 * Code
 */

/**
 * Middleware
 */
const userAxios = store => next => (action) => {
  switch (action.type) {
    case LOAD_USER: {
      const url = `http://127.0.0.1:8001/api/users/${action.id}`;
      axios
        .get(url)
        .then((response) => {
          // console.log(response.data[0]);
          store.dispatch(receivedUser(response.data[0]));
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
