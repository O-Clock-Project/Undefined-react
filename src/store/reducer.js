import user from 'src/data/users';
/**
 * Initial State
 */
const initialState = {
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
};

/**
 * Types
 */
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
