// import user from 'src/data/users';
/**
 * Initial State
 */
const initialState = {
  loaded: false,
  loaded_view: false,
  id_user: 0,
  id_user_view: 0,
  user: {},
  user_view: {},
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
  // Bookmarks filter
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
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_VIEW = 'LOAD_USER_VIEW';
export const RECEIVED_USER = 'RECEIVED_USER';
export const RECEIVED_USER_VIEW = 'RECEIVED_USER_VIEW';

const CHANGE_USER_VIEW = 'CHANGE_USER_VIEW';
const CLICK_PROFILE_EDIT = 'CLICK_PROFILE_EDIT';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const CHANGE_BIRTHDAY = 'CHANGE_BIRTHDAY';
const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE';
const RESET_SELECT_VALUE = 'RESET_SELECT_VALUE';

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

    case LOAD_USER_VIEW: {
      return {
        ...state,
        loaded_view: false,
        id_user_view: action.id,
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

    case RECEIVED_USER_VIEW: {
      return {
        ...state,
        user_view: action.data,
        loaded_view: true,
      };
    }

    case CHANGE_USER_VIEW: {
      return {
        ...state,
        id_user_view: action.id,
      };
    }

    case CLICK_PROFILE_EDIT:
      return {
        ...state,
        edit_profile: !state.edit_profile,
      };

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

    // Bookmarks filter
    case CHANGE_SELECT_VALUE: {
      return {
        ...state,
        search_bookmark_form: {
          ...state.search_bookmark_form,
          [action.name]: action.value,
        },
      };
    }

    case RESET_SELECT_VALUE: {
      return {
        ...state,
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

export const loadUserView = id => ({
  type: LOAD_USER_VIEW,
  id,
});

export const receivedUser = data => ({
  type: RECEIVED_USER,
  data,
});

export const receivedUserView = data => ({
  type: RECEIVED_USER_VIEW,
  data,
});

export const changeUserView = id => ({
  type: CHANGE_USER_VIEW,
  id,
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
// Bookmarks filter
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
