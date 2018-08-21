/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Bookmarks from 'src/components/Bookmarks';

// Action Creators
import { changeOrderingValue, requestBookmarks } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  bookmarks: state.main.bookmarks,
  status: state.main.bookmarksStatus,
  ordering: state.main.search_bookmark_ordering,
});

// Actions
const mapDispatchToProps = dispatch => ({
  changeOrderingValue: (value) => {
    dispatch(changeOrderingValue(value));
  },

  requestBookmarks: () => {
    dispatch(requestBookmarks());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const BookmarksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bookmarks);

/**
 * Export
 */
export default BookmarksContainer;
