/**
 * Initial State
 */
const initialState = {
  edit_profile: false,
  edit_profile_form: {
    input_firstname: '',
    input_lastname: '',
    input_email: '',
    input_new_password: '',
    input_confirm_new_password: '',
    input_pseudo_github: '',
    input_zip: '',
    birthday: '1988-07-11',
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
