/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileView from 'src/components/Profile/ProfileView';

// Action Creators
import { clickProfileEdit } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  idUser: state.id_user,
  user: state.user_view,
});

// Actions
const mapDispatchToProps = dispatch => ({
  clickProfileEdit: () => {
    dispatch(clickProfileEdit());
  },
});

// Container
const ProfileViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileView);

/**
 * Export
 */
export default ProfileViewContainer;
