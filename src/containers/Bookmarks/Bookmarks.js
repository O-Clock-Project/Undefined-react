/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Bookmarks from 'src/components/Bookmarks';

// Action Creators

// State
const mapStateToProps = state => ({
  bookmarks: state.bookmarks,
  status: state.bookmarksStatus,
});

// Actions
const mapDispatchToProps = {};

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
