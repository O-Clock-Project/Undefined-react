/**
 * Import
 */
import axios from 'axios';


/**
 * Local import
 */
import baseUrl from 'src/data/config';
import {
  LOAD_USER,
  LOAD_USER_VIEW,
  EDIT_USER,
  receivedUser,
  receivedUserView,
  successEditUser,
} from '../reducer';


/**
 * Code
 */

/**
 * Middleware
 */
const userAxios = store => next => (action) => {
  switch (action.type) {
    // Load user data connect
    case LOAD_USER: {
      const url = `${baseUrl}/api/users/${action.id}?displayGroup=profile`;
      axios
        .get(url)
        .then((response) => {
          store.dispatch(receivedUser(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    // Load user data view
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

    // Edit user
    case EDIT_USER: {
      const url = `${baseUrl}/api/users/${action.values.id}`;
      const prepareData = {
        username: action.values.username,
        first_name: action.values.firstname,
        last_name: action.values.lastname,
        email: action.values.email,
        pseudo_github: action.values.github,
        zip: action.values.zip,
        birthday: action.values.birthday,
      };
      axios
        .put(url, prepareData)
        .then((response) => {
          const data = {
            ...prepareData,
            avatar: response.data.avatar,
          };
          console.log(data);
          store.dispatch(successEditUser(data));
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