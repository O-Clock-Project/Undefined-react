/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Ressource from 'src/components/Ressource';

// Action Creators

// State
const mapStateToProps = state => ({
  bookmark: state.main.bookmark,
  status: state.main.ressourceStatus,
});

// Actions
const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const RessourceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ressource);

/**
 * Export
 */
export default RessourceContainer;
