/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Toolbar from 'src/components/Toolbar';

// Action Creators
import { showEditBookmark } from 'src/store/reducer';

// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  showEditBookmark: () => {
    dispatch(showEditBookmark());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const ToolbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toolbar);

/**
 * Export
 */
export default ToolbarContainer;
