/**
 * Initial State
 */
const initialState = {
  edit_profile: false,
};

/**
 * Types
 */
const CLICK_PROFILE_EDIT = 'CLICK_PROFILE_EDIT';

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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
