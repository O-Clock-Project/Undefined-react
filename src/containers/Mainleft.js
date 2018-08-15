/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Mainleft from 'src/components/Mainleft';

// Action Creators
import { loadUserView } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = null;

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  loadUserView: (id) => {
    dispatch(loadUserView(id));
  },
});

// Container
const MainleftContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mainleft);


/**
 * Export
 */
export default withRouter(MainleftContainer);
