/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Profile from 'src/components/Profile';

// Action Creators

/* === State (données) === */
const mapStateToProps = state => ({
  edit: state.edit_profile,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);


/**
 * Export
 */
export default ProfileContainer;
