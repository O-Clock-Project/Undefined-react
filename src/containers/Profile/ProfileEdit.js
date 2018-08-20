/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileEdit from 'src/components/Profile/ProfileEdit';

// Action Creators
import { clickProfileEdit, editUser } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  user: state.main.user_view,
});

// Actions
const mapDispatchToProps = dispatch => ({
  clickProfileEdit: () => {
    dispatch(clickProfileEdit());
  },
  editUser: (value) => {
    dispatch(editUser(value));
  },
});

// Container
const ProfileEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileEdit);

/**
 * Export
 */
export default ProfileEditContainer;
