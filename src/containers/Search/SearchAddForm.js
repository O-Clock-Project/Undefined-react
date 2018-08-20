/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SearchAddForm from 'src/components/Search/SearchAddForm';

// Action Creators
import { addTag, showAddTag } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  filters: state.main.filters,
  showFormTag: state.main.show_add_tag,
});

// Actions
const mapDispatchToProps = dispatch => ({
  addTag: (value) => {
    dispatch(addTag(value));
  },
  showAddTag: () => {
    dispatch(showAddTag());
  },
});


// Container
const SearchAddFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchAddForm);

/**
 * Export
 */
export default SearchAddFormContainer;
