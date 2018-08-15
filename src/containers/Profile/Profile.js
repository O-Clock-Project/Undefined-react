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
import { loadUserView } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    idView: id,
    user: state.user_view,
    edit: state.edit_profile,
    loaded: state.loaded_view,
  };
};

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  loadUserView: (id) => {
    dispatch(loadUserView(id));
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
