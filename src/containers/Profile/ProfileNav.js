/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileNav from 'src/components/Profile/ProfileNav';

// Action Creators

/* === State (données) === */
const mapStateToProps = state => ({
  user: state.main.user_view,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const ProfileNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNav);

/**
 * Export
 */
export default ProfileNavContainer;
