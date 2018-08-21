import ressource from 'src/data/ressource';
/**
 * Initial State
 */
const initialState = {
  // Users
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
  // Bookmarks
  // Datas
  bookmarks: [],
  bookmark: ressource,
  filters: {},
  // Loading status
  bookmarksStatus: 'loading',
  filtersStatus: 'loading',
  // No results
  results: true,
  // Select filter
  search_bookmark_form: {
    select_type: '',
    select_language: '',
    select_level: '',
    select_tag1: '',
    select_tag2: '',
    select_tag3: '',
  },
  // Ordering ASC/DESC
  direction: 'desc',
  // Select ordering type
  search_bookmark_ordering: 'published_at',
  // Form Add Bookmark
  show_add_tag: false,
};

/**
 * Types
 */
// Users
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_VIEW = 'LOAD_USER_VIEW';
export const RECEIVED_USER = 'RECEIVED_USER';
export const RECEIVED_USER_VIEW = 'RECEIVED_USER_VIEW';
export const EDIT_USER = 'EDIT_USER';
export const SUCCESS_EDIT_USER = 'SUCCESS_EDIT_USER';

export const CHANGE_USER_VIEW = 'CHANGE_USER_VIEW';
export const CLICK_PROFILE_EDIT = 'CLICK_PROFILE_EDIT';

// Bookmarks
export const LOAD_BOOKMARKS = 'LOAD_BOOKMARKS';
export const LOAD_FILTERS = 'LOAD_FILTERS';
export const RECEIVED_BOOKMARKS = 'RECEIVED_BOOKMARKS';
export const RECEIVED_FILTERS = 'RECEIVED_FILTERS';

export const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE';
export const RESET_SELECT_VALUE = 'RESET_SELECT_VALUE';
export const CHANGE_ORDERING_VALUE = 'CHANGE_ORDERING_VALUE';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const NO_RESULTS = 'NO_RESULTS';

// Form add bookmark
export const SHOW_ADD_TAG = 'SHOW_ADD_TAG';
export const ADD_TAG = 'ADD_TAG';


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
        edit_profile: false,
      };
    }

    case EDIT_USER: {
      return {
        ...state,
      };
    }

    case SUCCESS_EDIT_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.data,
        },
        user_view: {
          ...state.user_view,
          ...action.data,
        },
        edit_profile: false,
      };
    }

    case CHANGE_USER_VIEW: {
      return {
        ...state,
        id_user_view: action.id,
      };
    }

    case CLICK_PROFILE_EDIT: {
      return {
        ...state,
        edit_profile: !state.edit_profile,
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

    case LOAD_FILTERS: {
      return {
        ...state,
        // Loading status for filters
        filtersStatus: 'loading',
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

    case RECEIVED_FILTERS: {
      return {
        ...state,
        // Adding received bookmarks to the state
        filters: action.data,
        // Change the loading status
        filtersStatus: 'loaded',
      };
    }

    case REQUEST_BOOKMARKS: {
      return {
        ...state,
      };
    }

    case NO_RESULTS: {
      return {
        ...state,
        results: false,
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
        bookmarksStatus: 'loading',
        results: true,
      };
    }

    case RESET_SELECT_VALUE: {
      return {
        ...state,
        // Reset all the select
        search_bookmark_form: {
          select_type: '',
          select_language: '',
          select_level: '',
          select_tag1: '',
          select_tag2: '',
          select_tag3: '',
        },
        bookmarksStatus: 'loading',
        results: true,
      };
    }

    case CHANGE_ORDERING_VALUE: {
      return {
        ...state,
        // New value for ordering
        search_bookmark_ordering: action.value,
        bookmarksStatus: 'loading',
      };
    }

    case CHANGE_DIRECTION: {
      // Set the value direction
      const newDirection = state.direction === 'asc' ? 'desc' : 'asc';
      return {
        ...state,
        // New value for ordering
        direction: newDirection,
      };
    }

    // Form add bookmark
    case SHOW_ADD_TAG: {
      return {
        ...state,
        // New value for ordering
        show_add_tag: !state.show_add_tag,
      };
    }

    case ADD_TAG: {
      const id = state.filters.tags.length + 2;
      return {
        ...state,
        show_add_tag: false,
        // New value for ordering
        filters: {
          ...state.filters,
          tags: [
            ...state.filters.tags,
            {
              id,
              label: action.value.tag,
            },
          ],
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

export const editUser = values => ({
  type: EDIT_USER,
  values,
});

export const successEditUser = data => ({
  type: SUCCESS_EDIT_USER,
  data,
});

export const changeUserView = id => ({
  type: CHANGE_USER_VIEW,
  id,
});

export const clickProfileEdit = () => ({
  type: CLICK_PROFILE_EDIT,
});

// Bookmarks
export const loadBookmarks = () => ({
  type: LOAD_BOOKMARKS,
});

export const loadFilters = () => ({
  type: LOAD_FILTERS,
});

export const receivedBookmarks = data => ({
  type: RECEIVED_BOOKMARKS,
  data,
});

export const receivedFilters = data => ({
  type: RECEIVED_FILTERS,
  data,
});

export const requestBookmarks = () => ({
  type: REQUEST_BOOKMARKS,
});

export const noResults = () => ({
  type: NO_RESULTS,
});

export const changeSelectValue = (name, value) => ({
  type: CHANGE_SELECT_VALUE,
  name,
  value,
});

export const resetSelectValue = () => ({
  type: RESET_SELECT_VALUE,
});

export const changeOrderingValue = value => ({
  type: CHANGE_ORDERING_VALUE,
  value,
});

export const changeDirection = () => ({
  type: CHANGE_DIRECTION,
});

export const showAddTag = () => ({
  type: SHOW_ADD_TAG,
});

export const addTag = value => ({
  type: ADD_TAG,
  value,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
