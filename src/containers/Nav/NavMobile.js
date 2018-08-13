/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavMobile from 'src/components/Nav/NavMobile';

// Action Creators

/* === State (données) === */
const mapStateToProps = state => ({
  user: state.user,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const NavMobileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavMobile);


/**
 * Export
 */
export default NavMobileContainer;
