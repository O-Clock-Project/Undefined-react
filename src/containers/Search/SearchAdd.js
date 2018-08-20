/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SearchAdd from 'src/components/Search/SearchAdd';

// Action Creators
import { addTag } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  showFormTag: state.main.show_add_tag,
});

// Actions
const mapDispatchToProps = dispatch => ({
  addTag: (value) => {
    dispatch(addTag(value));
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
