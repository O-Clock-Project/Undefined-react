/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import NavDesktop from 'src/components/Nav/NavDesktop';

// Action Creators
import { changeUserView } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  user: state.main.user,
  loaded: state.main.loaded,
});

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  changeUserView: (id) => {
    dispatch(changeUserView(id));
  },
});

// Container
const NavDesktopContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavDesktop);


/**
 * Export
 */
export default withRouter(NavDesktopContainer);
