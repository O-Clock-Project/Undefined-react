/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaBook, FaUserCircle, FaInfoCircle, FaSignOutAlt, FaUserSecret,
} from 'react-icons/fa';

/**
 * Local import
 */
// Composants

// Assets
import logo from 'src/assets/images/logo_bold_jaune.png';

/**
 * Code
 */
class NavDesktop extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loaded: PropTypes.bool.isRequired,
  }

  clickDisconnect = () => {
    window.location.replace('/logout');
  }

  clickAdmin = () => {
    window.location.replace('/admin');
  }

  render() {
    const { user, loaded } = this.props;
    return (
      <nav className="navbar">
        <div className="navbar-start">
          {/* Profile */}
          <NavLink
            exact
            to={`/app/profile/${user.id}`}
            className="navbar-link"
          >
            {loaded && <img className="navbar-avatar" src={user.avatar} alt="Votre avatar" />}
          </NavLink>
          {/* Home */}
          <NavLink
            exact
            to="/app"
            className="navbar-link"
            activeClassName="navbar-link--active"
          >
            <FaHome className="font-svg" /> Accueil
          </NavLink>
          {/* Bookmarks */}
          <NavLink
            exact
            to="/app/bookmarks"
            className="navbar-link"
            activeClassName="navbar-link--active"
          >
            <FaBook className="font-svg" /> Bookmarks
          </NavLink>
          {/* Profile */}
          <NavLink
            strict
            to={`/app/profile/${user.id}`}
            className="navbar-link"
            activeClassName="navbar-link--active"
          >
            <FaUserCircle className="font-svg" /> Profil
          </NavLink>
          {/* Informations */}
          <NavLink
            strict
            to="/app/informations"
            className="navbar-link"
            activeClassName="navbar-link--active"
          >
            <FaInfoCircle className="font-svg" /> Informations
          </NavLink>
        </div>
        <div className="navbar-end">
          {loaded && user.best_role.level >= 3
            && (
              <a
                className="navbar-link"
                onClick={this.clickDisconnect}
              >
                <FaUserSecret className="font-svg" /> Administration
              </a>
            )}
          <a
            className="navbar-link"
            onClick={this.clickDisconnect}
          >
            <FaSignOutAlt className="font-svg" /> Déconnexion
          </a>
          {/* Home */}
          <NavLink
            exact
            to="/app"
            className="navbar-link"
            activeClassName="navbar-link--active"
          >
            <img className="navbar-logo" src={logo} alt="Logo The Hub" />
          </NavLink>
        </div>
      </nav>
    );
  }
}


/**
 * Export
 */
export default NavDesktop;
