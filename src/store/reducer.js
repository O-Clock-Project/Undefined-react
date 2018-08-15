/**
 * Initial State
 */
const initialState = {
  // Users
  loaded: false,
  id_user: 0,
  user: {},
  edit_profile: false,
  edit_profile_form: {
    input_firstname: '',
    input_lastname: '',
    input_email: '',
    input_new_password: '',
    input_confirm_new_password: '',
    input_pseudo_github: '',
    input_zip: '',
    birthday: '',
  },
  // Bookmarks
  // Datas
  bookmarks: [],
  // Loading status
  bookmarksStatus: 'loading',
  // Select filter
  search_bookmark_form: {
    select_type: 'all',
    select_language: 'all',
    select_level: 'all',
    select_tag1: 'all',
    select_tag2: 'all',
    select_tag3: 'all',
  },
};

/**
 * Types
 */
// Users
export const LOAD_USER = 'LOAD_USER';
export const RECEIVED_USER = 'RECEIVED_USER';
export const CLICK_PROFILE_EDIT = 'CLICK_PROFILE_EDIT';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_BIRTHDAY = 'CHANGE_BIRTHDAY';

// Bookmarks
export const LOAD_BOOKMARKS = 'LOAD_BOOKMARKS';
export const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE';
export const RESET_SELECT_VALUE = 'RESET_SELECT_VALUE';
export const RECEIVED_BOOKMARKS = 'RECEIVED_BOOKMARKS';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // User Profil
    case LOAD_USER: {
      return {
        ...state,
        loaded: false,
        id_user: action.id,
      };
    }

    case RECEIVED_USER: {
      return {
        ...state,
        user: action.data,
        loaded: true,
        edit_profile_form: {
          ...state.edit_profile_form,
          input_firstname: action.data.first_name,
          input_lastname: action.data.last_name,
          input_email: action.data.email,
          input_pseudo_github: action.data.pseudo_github,
          input_zip: action.data.zip,
          birthday: action.data.birthday,
        },
      };
    }

    case CLICK_PROFILE_EDIT: {
      return {
        ...state,
        edit_profile: !state.edit_profile,
      };
    }

    case CHANGE_INPUT_VALUE: {
      const input = `input_${action.name}`;
      return {
        ...state,
        edit_profile_form: {
          ...state.edit_profile_form,
          [input]: action.value,
        },
      };
    }

    case CHANGE_BIRTHDAY: {
      return {
        ...state,
        edit_profile_form: {
          ...state.edit_profile_form,
          birthday: action.value,
        },
      };
    }

    // Bookmarks
    case LOAD_BOOKMARKS: {
      return {
        ...state,
        // Loading status for bookmarks
        bookmarksStatus: 'loading',
      };
    }

    case RECEIVED_BOOKMARKS: {
      return {
        ...state,
        // Adding received bookmarks to the state
        bookmarks: action.data,
        // Change the loading status
        bookmarksStatus: 'loaded',
      };
    }

    case CHANGE_SELECT_VALUE: {
      return {
        ...state,
        search_bookmark_form: {
          // Old select value in the state
          ...state.search_bookmark_form,
          // New action select value
          [action.name]: action.value,
        },
      };
    }

    case RESET_SELECT_VALUE: {
      return {
        ...state,
        // Reset all the select
        search_bookmark_form: {
          select_type: 'all',
          select_language: 'all',
          select_level: 'all',
          select_tag1: 'all',
          select_tag2: 'all',
          select_tag3: 'all',
        },
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
// User Profil
export const loadUser = id => ({
  type: LOAD_USER,
  id,
});

export const receivedUser = data => ({
  type: RECEIVED_USER,
  data,
});

export const clickProfileEdit = () => ({
  type: CLICK_PROFILE_EDIT,
});

export const changeInputValue = (name, value) => ({
  type: CHANGE_INPUT_VALUE,
  name,
  value,
});

export const changeBirthday = value => ({
  type: CHANGE_BIRTHDAY,
  value,
});
// Bookmarks
export const loadBookmarks = () => ({
  type: LOAD_BOOKMARKS,
});

export const receivedBookmarks = data => ({
  type: RECEIVED_BOOKMARKS,
  data,
});

export const changeSelectValue = (name, value) => ({
  type: CHANGE_SELECT_VALUE,
  name,
  value,
});

export const resetSelectValue = () => ({
  type: RESET_SELECT_VALUE,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
