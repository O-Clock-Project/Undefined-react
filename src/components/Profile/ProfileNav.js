/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { count } from 'rxjs/operator/count';

/**
 * Local import
 */
// Composants


// Styles et assets

/**
 * Code
 */
const ProfileNav = ({ user }) => (
  <div className="profile-nav">
    <div className="profile-nav-link">
      <p>Mes Bookmarks</p>
      <p className="profile-nav-count">{user.bookmarks.length}</p>
    </div>
    <div className="profile-nav-link">
      <p>Mes Favoris</p>
      <p className="profile-nav-count">{user.favorites.length}</p>
    </div>
    <div className="profile-nav-link">
      <p>Mes Votes</p>
      <p className="profile-nav-count">{user.votes.length}</p>
    </div>
  </div>
);

ProfileNav.propTypes = {
  user: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default ProfileNav;
