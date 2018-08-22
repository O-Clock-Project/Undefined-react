/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileNav from 'src/components/Profile/ProfileNav';

// Action Creators
import { loadBookmarksByUser, loadFavoritesForUser } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  user: state.main.user_view,
  idUser: state.main.id_user,
});

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  loadBookmarksByUser: () => {
    dispatch(loadBookmarksByUser());
  },
  loadFavoritesForUser: () => {
    dispatch(loadFavoritesForUser());
  },
});

// Container
const ProfileNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNav);

/**
 * Export
 */
export default ProfileNavContainer;
