/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Toolbar from 'src/components/Toolbar';

// Action Creators

// State
const mapStateToProps = state => ({
  currentUserId: state.main.id_user,
});

// Actions
const mapDispatchToProps = {};

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
