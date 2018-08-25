/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Ressource from 'src/components/Ressource';

// Action Creators
import { loadRessource } from 'src/store/reducer';

// State
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    idRessource: id,
    bookmark: state.main.bookmark,
    status: state.main.ressourceStatus,
  };
};

// Actions
const mapDispatchToProps = dispatch => ({
  loadRessource: (id) => {
    dispatch(loadRessource(id));
  },
});

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
