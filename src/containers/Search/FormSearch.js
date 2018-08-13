/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import FormSearch from 'src/components/Search/FormSearch';

// Action Creators
import { changeSelectValue } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  data: state.search_bookmark_form,
});

// Actions
const mapDispatchToProps = dispatch => ({
  changeSelectValue: (name, value) => {
    dispatch(changeSelectValue(name, value));
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
