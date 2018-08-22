/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Bookmark from 'src/components/Bookmark';

// Action Creators
import { dispatchSupport, requestBookmarks } from 'src/store/reducer';

// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  dispatchSupport: (value) => {
    dispatch(dispatchSupport(value));
  },

  requestBookmarks: () => {
    dispatch(requestBookmarks());
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
