/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Ressource from 'src/components/Ressource';

// Action Creators
import { loadRessource, showEditBookmark, editBookmark } from 'src/store/reducer';

// State
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    idRessource: id,
    bookmark: state.main.bookmark,
    status: state.main.ressourceStatus,
    formEditBookmark: state.main.show_edit_bookmark,
  };
};

// Actions
const mapDispatchToProps = dispatch => ({
  loadRessource: (id) => {
    dispatch(loadRessource(id));
  },
  showEditBookmark: () => {
    dispatch(showEditBookmark());
  },
  editBookmark: (values) => {
    dispatch(editBookmark(values));
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
