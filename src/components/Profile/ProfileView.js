/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaCog, FaGithub } from 'react-icons/fa';

/**
 * Local import
 */
// Composants


// Styles et assets
import avatar from 'src/assets/images/avatar.jpg';

/**
 * Code
 */
class ProfileView extends React.Component {
  static propTypes = {
    clickProfileEdit: PropTypes.func.isRequired,
  };

  clickOnTools = () => {
    const { clickProfileEdit } = this.props;
    clickProfileEdit();
  }

  render() {
    return (
      <div className="profile-infos">
        <a href="#" className="profile-infos-tools" onClick={this.clickOnTools}><FaCog /></a>
        <a href="#" className="profile-infos-github"><FaGithub /></a>
        <img className="profile-infos-avatar" src={avatar} alt="Votre avatar" />
        <div className="profile-infos-content">
          <div>Prénom : <span>Julien</span></div>
          <div>Nom : <span>Berrebi</span></div>
          <div>Rôle : <span>Étudiant</span></div>
          <div>Date de naissance : <span>11-07-1988</span></div>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default ProfileView;
