/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavDesktop from 'src/components/Nav/NavDesktop';

// Action Creators

/* === State (données) === */
const mapStateToProps = state => ({
  user: state.user,
  loaded: state.loaded,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const NavDesktopContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavDesktop);


/**
 * Export
 */
export default NavDesktopContainer;
