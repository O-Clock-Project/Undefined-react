/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SearchAdd from 'src/components/Search/SearchAdd';

// Action Creators
import { addBookmark } from 'src/store/reducer';

// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  addBookmark: (values) => {
    dispatch(addBookmark(values));
  },
});


// Container
const SearchAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchAdd);

/**
 * Export
 */
export default SearchAddContainer;
