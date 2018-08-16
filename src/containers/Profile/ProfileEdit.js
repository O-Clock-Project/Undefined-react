/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileEdit from 'src/components/Profile/ProfileEdit';

// Action Creators
import { clickProfileEdit, changeBirthday } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  inputForm: state.edit_profile_form,
});

// Actions
const mapDispatchToProps = dispatch => ({
  clickProfileEdit: () => {
    dispatch(clickProfileEdit());
  },
  changeBirthday: (value) => {
    dispatch(changeBirthday(value));
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
