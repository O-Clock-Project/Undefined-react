// import user from 'src/data/users';
/**
 * Initial State
 */
const initialState = {
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
};

/**
 * Types
 */
export const LOAD_USER = 'LOAD_USER';
export const RECEIVED_USER = 'RECEIVED_USER';

const CLICK_PROFILE_EDIT = 'CLICK_PROFILE_EDIT';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const CHANGE_BIRTHDAY = 'CHANGE_BIRTHDAY';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
          input_firstname: action.data.firstName,
          input_lastname: action.data.lastName,
          input_email: action.data.email,
          input_pseudo_github: action.data.pseudoGithub,
          input_zip: action.data.zip,
          birthday: action.data.birthday,
        },
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

    default:
      return state;
  }
};

/**
 * Action Creators
 */
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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
