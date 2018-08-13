/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileEditLine from 'src/components/Profile/ProfileEditLine';

// Action Creators
import { changeInputValue } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = null;

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  changeInputValue: (name, value) => {
    dispatch(changeInputValue(name, value));
  },
});

// Container
const ProfileEditLineContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileEditLine);

/**
 * Export
 */
export default ProfileEditLineContainer;
