/**
 * Import
 */
import React from 'react';
// import { FaCog, FaGithub } from 'react-icons/fa';

/**
 * Local import
 */
// Composants


// Styles et assets
// import avatar from 'src/assets/images/avatar.jpg';

/**
 * Code
 */
const ProfileNav = () => (
  <div className="profile-nav">
    <div className="profile-nav-link">
      <p>Mes Bookmarks</p>
      <p className="profile-nav-count">12</p>
    </div>
    <div className="profile-nav-link">
      <p>Mes Favoris</p>
      <p className="profile-nav-count">52</p>
    </div>
    <div className="profile-nav-link">
      <p>Mes Votes</p>
      <p className="profile-nav-count">112</p>
    </div>
  </div>
);

/**
 * Export
 */
export default ProfileNav;
