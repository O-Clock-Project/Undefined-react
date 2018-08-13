/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaCog, FaGithub } from 'react-icons/fa';
import moment from 'moment';

/**
 * Local import
 */
// Composants


// Styles et assets

/**
 * Code
 */
class ProfileView extends React.Component {
  static propTypes = {
    clickProfileEdit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  clickOnTools = () => {
    const { clickProfileEdit } = this.props;
    clickProfileEdit();
  }

  render() {
    const { user } = this.props;
    const urlGitHub = `https://github.com/${user.pseudoGithub}`;
    return (
      <div className="profile-infos">
        <FaCog className="profile-infos-tools" onClick={this.clickOnTools} />
        <a href={urlGitHub} className="profile-infos-github"><FaGithub /></a>
        <img className="profile-infos-avatar" src={user.avatar} alt="Votre avatar" />
        <div className="profile-infos-content">
          <div>Prénom : <span>{user.firstName}</span></div>
          <div>Nom : <span>{user.lastName}</span></div>
          <div>Rôle : <span>{user.affectations['0'].role.name}</span></div>
          <div>Spécialité : <span>{user.speciality.name}</span></div>
          <div>Date de naissance : <span>{moment(user.birthday).format('DD-MM-YYYY')}</span></div>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default ProfileView;
