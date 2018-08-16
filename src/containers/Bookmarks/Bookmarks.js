/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Bookmarks from 'src/components/Bookmarks';

// Action Creators
import { changeOrderingValue } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  bookmarks: state.bookmarks,
  status: state.bookmarksStatus,
  ordering: state.search_bookmark_ordering,
});

// Actions
const mapDispatchToProps = dispatch => ({
  changeOrderingValue: (value) => {
    dispatch(changeOrderingValue(value));
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
