/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Search from 'src/components/Search';

// Action Creators
import { showAddBookmark } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  toggleForm: state.main.show_add_bookmark,
  loaded: state.main.loaded_view,
});

// Actions
const mapDispatchToProps = dispatch => ({
  showAddBookmark: () => {
    dispatch(showAddBookmark());
  },
});


// Container
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

/**
 * Export
 */
export default SearchContainer;
