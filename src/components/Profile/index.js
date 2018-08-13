/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import ProfileView from 'src/containers/ProfileView';
import ProfileEdit from 'src/containers/ProfileEdit';
import ProfileNav from './ProfileNav';

// Styles et assets
import './profile.sass';

/**
 * Code
 */
const Profile = ({ user, edit }) => (
  <div id="profile">
    <h1 id="profile_title">{user.username}</h1>
    <p id="profile_intro">{user.affectations[0].promotion.name} - (Professeur référent) - (Tuteur)</p>
    {!edit && <ProfileView />}
    {edit && <ProfileEdit />}
    <ProfileNav />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  edit: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Profile;
