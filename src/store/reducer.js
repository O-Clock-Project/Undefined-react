import ressource from 'src/data/ressource';
/**
 * Initial State
 */
const initialState = {
  // USERS
  loaded: false,
  loaded_view: false,
  id_user: 0,
  id_user_view: 0,
  user: {},
  user_view: {},
  edit_profile: false,

  // BOOKMARKS
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
  // Show Bookmarks on Profile View
  viewProfile: '',
  // Ordering ASC/DESC
  direction: 'desc',
  // Select ordering type
  search_bookmark_ordering: 'created_at',
  // Form Add Bookmark
  show_add_tag: false,
  show_add_bookmark: true,

  // PROMO
  loaded_promo: false,
  promo: {},
  school_links: [],
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
export const LOAD_BOOKMARKS_BY_USER = 'LOAD_BOOKMARKS_BY_USER';
export const LOAD_FAVORITES_FOR_USER = 'LOAD_FAVORITES_FOR_USER';
export const RECEIVED_BOOKMARKS = 'RECEIVED_BOOKMARKS';
export const RECEIVED_FILTERS = 'RECEIVED_FILTERS';

export const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE';
export const RESET_SELECT_VALUE = 'RESET_SELECT_VALUE';
export const CHANGE_ORDERING_VALUE = 'CHANGE_ORDERING_VALUE';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const DISPATCH_SUPPORT = 'DISPATCH_SUPPORT';
export const DISPATCH_TAG = 'DISPACTH_TAG';
export const DISPATCH_LANGUAGE = 'DISPATCH_LANGUAGE';
export const DISPATCH_LEVEL = 'DISPATCH_LEVEL';

export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const NO_RESULTS = 'NO_RESULTS';

// Form add bookmark
export const SHOW_ADD_TAG = 'SHOW_ADD_TAG';
export const SHOW_ADD_BOOKMARK = 'SHOW_ADD_BOOKMARK';
export const ADD_TAG = 'ADD_TAG';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';

// PROMO
export const LOAD_PROMO = 'LOAD_PROMO';
export const RECEIVED_PROMO = 'RECEIVED_PROMO';
export const LOAD_SCHOOL_LINKS = 'LOAD_SCHOOL_LINKS';
export const RECEIVED_SCHOOL_LINKS = 'RECEIVED_SCHOOL_LINKS';


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
        viewProfile: '',
      };
    }

    case LOAD_FILTERS: {
      return {
        ...state,
        // Loading status for filters
        filtersStatus: 'loading',
      };
    }

    case LOAD_BOOKMARKS_BY_USER: {
      return {
        ...state,
        viewProfile: 'own_bookmarks',
      };
    }

    case LOAD_FAVORITES_FOR_USER: {
      return {
        ...state,
        viewProfile: 'own_favorites',
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
        viewProfile: '',
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
        bookmarksStatus: 'loading',
      };
    }

    case DISPATCH_SUPPORT: {
      return {
        ...state,
        // New value for ordering
        search_bookmark_form: {
          select_type: action.value,
          select_language: '',
          select_level: '',
          select_tag1: '',
          select_tag2: '',
          select_tag3: '',
        },
        bookmarksStatus: 'loading',
      };
    }

    case DISPATCH_TAG: {
      return {
        ...state,
        // New value for ordering
        search_bookmark_form: {
          select_type: '',
          select_language: '',
          select_level: '',
          select_tag1: action.value,
          select_tag2: '',
          select_tag3: '',
        },
        bookmarksStatus: 'loading',
      };
    }

    case DISPATCH_LANGUAGE: {
      return {
        ...state,
        // New value for ordering
        search_bookmark_form: {
          select_type: '',
          select_language: action.value,
          select_level: '',
          select_tag1: '',
          select_tag2: '',
          select_tag3: '',
        },
        bookmarksStatus: 'loading',
      };
    }

    case DISPATCH_LEVEL: {
      return {
        ...state,
        // New value for ordering
        search_bookmark_form: {
          select_type: '',
          select_language: '',
          select_level: action.value,
          select_tag1: '',
          select_tag2: '',
          select_tag3: '',
        },
        bookmarksStatus: 'loading',
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

    case SHOW_ADD_BOOKMARK: {
      return {
        ...state,
        // New value for ordering
        show_add_bookmark: !state.show_add_bookmark,
      };
    }

    case ADD_TAG: {
      return {
        ...state,
        // show_add_tag: false,
      };
    }

    case ADD_BOOKMARK: {
      return {
        ...state,
      };
    }

    // PROMO
    case LOAD_PROMO: {
      return {
        ...state,
        loaded_promo: false,
      };
    }

    case RECEIVED_PROMO: {
      return {
        ...state,
        promo: action.data,
        loaded_promo: true,
      };
    }

    case LOAD_SCHOOL_LINKS: {
      return {
        ...state,
      };
    }

    case RECEIVED_SCHOOL_LINKS: {
      return {
        ...state,
        school_links: action.data,
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

export const loadBookmarksByUser = () => ({
  type: LOAD_BOOKMARKS_BY_USER,
});

export const loadFavoritesForUser = () => ({
  type: LOAD_FAVORITES_FOR_USER,
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

export const dispatchSupport = value => ({
  type: DISPATCH_SUPPORT,
  value,
});

export const dispatchTag = value => ({
  type: DISPATCH_TAG,
  value,
});

export const dispatchLanguage = value => ({
  type: DISPATCH_LANGUAGE,
  value,
});

export const dispatchLevel = value => ({
  type: DISPATCH_LEVEL,
  value,
});

export const showAddTag = () => ({
  type: SHOW_ADD_TAG,
});

export const showAddBookmark = () => ({
  type: SHOW_ADD_BOOKMARK,
});

export const addTag = values => ({
  type: ADD_TAG,
  values,
});

export const addBookmark = values => ({
  type: ADD_BOOKMARK,
  values,
});

export const loadPromo = id => ({
  type: LOAD_PROMO,
  id,
});

export const receivedPromo = data => ({
  type: RECEIVED_PROMO,
  data,
});

export const loadSchoolLinks = () => ({
  type: LOAD_SCHOOL_LINKS,
});

export const receivedSchoolLinks = data => ({
  type: RECEIVED_SCHOOL_LINKS,
  data,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
