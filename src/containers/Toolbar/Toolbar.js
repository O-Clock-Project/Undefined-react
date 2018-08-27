/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Toolbar from 'src/components/Toolbar';

// Action Creators
import { showEditBookmark, favRessource } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  currentUserId: state.main.id_user,
  currentUser: state.main.user,
});

// Actions
const mapDispatchToProps = dispatch => ({
  showEditBookmark: () => {
    dispatch(showEditBookmark());
  },

  favRessource: (typeRequest, bookmarkId, userId, newFavedBy) => {
    dispatch(favRessource(typeRequest, bookmarkId, userId, newFavedBy));
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
