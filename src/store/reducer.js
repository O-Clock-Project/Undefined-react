import user from 'src/data/users';
/**
 * Initial State
 */
const initialState = {
  // User profil
  user,
  edit_profile: false,
  edit_profile_form: {
    input_firstname: user.first_name,
    input_lastname: user.last_name,
    input_email: user.email,
    input_new_password: '',
    input_confirm_new_password: '',
    input_pseudo_github: user.pseudo_github,
    input_zip: user.zip,
    birthday: user.birthday,
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
