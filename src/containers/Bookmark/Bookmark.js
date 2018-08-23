/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Bookmark from 'src/components/Bookmark';

// Action Creators
import {
  dispatchSupport,
  requestBookmarks,
  dispatchTag,
  dispatchLanguage,
  dispatchLevel,
  loadRessource,
} from 'src/store/reducer';

// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  dispatchSupport: (value) => {
    dispatch(dispatchSupport(value));
  },

  dispatchTag: (value) => {
    dispatch(dispatchTag(value));
  },

  dispatchLanguage: (value) => {
    dispatch(dispatchLanguage(value));
  },

  dispatchLevel: (value) => {
    dispatch(dispatchLevel(value));
  },

  requestBookmarks: () => {
    dispatch(requestBookmarks());
  },

  loadRessource: (id) => {
    dispatch(loadRessource(id));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const BookmarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bookmark);

/**
 * Export
 */
export default BookmarkContainer;
