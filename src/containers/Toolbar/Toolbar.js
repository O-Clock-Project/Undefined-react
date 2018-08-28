/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Toolbar from 'src/components/Toolbar';

// Action Creators
import { showEditBookmark, favRessource, getVote } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  currentUserId: state.main.id_user,
  currentUser: state.main.user,
  userVoteForBookmark: state.main.userVoteForBookmark,
});

// Actions
const mapDispatchToProps = dispatch => ({
  showEditBookmark: () => {
    dispatch(showEditBookmark());
  },

  favRessource: (typeRequest, bookmarkId, userId, newFavedBy) => {
    dispatch(favRessource(typeRequest, bookmarkId, userId, newFavedBy));
  },

  getVote: (userId, bookmarkId) => {
    dispatch(getVote(userId, bookmarkId));
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
