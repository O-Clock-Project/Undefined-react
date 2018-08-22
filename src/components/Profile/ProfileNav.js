/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants


// Styles et assets

/**
 * Code
 */
const ProfileNav = ({
  idUser, user, loadBookmarksByUser, loadFavoritesForUser,
}) => (
  <div className="profile-nav">
    <div className="profile-nav-link" onClick={loadBookmarksByUser}>
      <p>{idUser === user.id ? 'Mes Bookmarks' : 'Ses Bookmarks'}</p>
      <p className="profile-nav-count">{user.bookmarks.length}</p>
    </div>
    <div className="profile-nav-link" onClick={loadFavoritesForUser}>
      <p>{idUser === user.id ? 'Mes Favoris' : 'Ses Favoris'}</p>
      <p className="profile-nav-count">{user.favorites.length}</p>
    </div>
  </div>
);

ProfileNav.propTypes = {
  idUser: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  loadBookmarksByUser: PropTypes.func.isRequired,
  loadFavoritesForUser: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default ProfileNav;
