/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import FormSearch from 'src/components/Search/FormSearch';

// Action Creators
import { changeSelectValue, resetSelectValue } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  data: state.main.search_bookmark_form,
  filters: state.main.filters,
  status: state.main.filtersStatus,
});

// Actions
const mapDispatchToProps = dispatch => ({
  changeSelectValue: (name, value) => {
    dispatch(changeSelectValue(name, value));
  },

  resetSelectValue: () => {
    dispatch(resetSelectValue());
  },
});

// Container
const FormSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSearch);

/**
 * Export
 */
export default FormSearchContainer;
