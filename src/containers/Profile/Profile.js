/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Profile from 'src/components/Profile';

// Action Creators
import { loadUserView, loadBookmarks, resetSelectValue } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    idView: id,
    user: state.main.user_view,
    edit: state.main.edit_profile,
    loaded: state.main.loaded_view,
  };
};

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  loadUserView: (id) => {
    dispatch(loadUserView(id));
  },
  loadBookmarks: () => {
    dispatch(loadBookmarks());
  },
  resetSelectValue: () => {
    dispatch(resetSelectValue());
  },
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);


/**
 * Export
 */
export default withRouter(ProfileContainer);
