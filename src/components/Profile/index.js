/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import ProfileView from 'src/containers/Profile/ProfileView';
import ProfileEdit from 'src/containers/Profile/ProfileEdit';
import ProfileNav from './ProfileNav';

// Styles et assets
import './profile.sass';

/**
 * Code
 */
const Profile = ({ user, edit, loaded }) => (
  <div id="profile">
    {loaded && <h1 id="profile_title">{user.username}</h1>}
    {loaded && <p id="profile_intro">{user.affectations['0'].promotion.name} - (Professeur référent) - (Tuteur)</p>}
    {!edit && loaded && <ProfileView />}
    {edit && loaded && <ProfileEdit />}
    <ProfileNav />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  edit: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Profile;
