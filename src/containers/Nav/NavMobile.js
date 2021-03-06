/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import NavMobile from 'src/components/Nav/NavMobile';

// Action Creators

// State
const mapStateToProps = state => ({
  user: state.main.user,
  loaded: state.main.loaded,
});

// Actions
const mapDispatchToProps = {};

// Container
const NavMobileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavMobile);


/**
 * Export
 */
export default withRouter(NavMobileContainer);
