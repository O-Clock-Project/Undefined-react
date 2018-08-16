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
    idUser: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
  };

  clickOnTools = () => {
    const { clickProfileEdit } = this.props;
    clickProfileEdit();
  }

  render() {
    const { idUser, user } = this.props;
    const urlGitHub = `https://github.com/${user.pseudo_github}`;
    return (
      <div className="profile-infos">
        {idUser === user.id && <FaCog className="profile-infos-tools" onClick={this.clickOnTools} />}
        <a href={urlGitHub} className="profile-infos-github"><FaGithub /></a>
        <img className="profile-infos-avatar" src={user.avatar} alt="Votre avatar" />
        <div className="profile-infos-content">
          <div>Prénom : <span>{user.first_name}</span></div>
          <div>Nom : <span>{user.last_name}</span></div>
          <div>Rôle : <span>{user.affectations['0'].role.name}</span></div>
          {user.speciality && <div>Spécialité : <span>{user.speciality.name}</span></div>}
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
