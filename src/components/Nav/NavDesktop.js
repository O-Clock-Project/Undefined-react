/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaBook, FaUserCircle, FaInfoCircle,
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
const NavDesktop = ({ user, loaded, changeUserView }) => (
  <nav className="navbar">
    <div className="navbar-start">
      {/* Profile */}
      <NavLink
        exact
        to={`/profile/${user.id}`}
        className="navbar-link"
      >
        {loaded && <img className="navbar-avatar" src={user.avatar} alt="Votre avatar" />}
      </NavLink>
      {/* Home */}
      <NavLink
        exact
        to="/"
        className="navbar-link"
        activeClassName="navbar-link--active"
      >
        <FaHome className="font-svg" /> Accueil
      </NavLink>
      {/* Bookmarks */}
      <NavLink
        exact
        to="/bookmarks"
        className="navbar-link"
        activeClassName="navbar-link--active"
      >
        <FaBook className="font-svg" /> Bookmarks
      </NavLink>
      {/* Profile */}
      <NavLink
        strict
        to={`/profile/${user.id}`}
        className="navbar-link"
        activeClassName="navbar-link--active"
      >
        <FaUserCircle className="font-svg" /> Profil
      </NavLink>
      {/* Informations */}
      <a href="#" className="navbar-link"><FaInfoCircle className="font-svg" /> Informations</a>
    </div>
    <div className="navbar-end">
      {/* Home */}
      <NavLink
        exact
        to="/"
        className="navbar-link"
        activeClassName="navbar-link--active"
      >
        <img className="navbar-logo" src={logo} alt="Logo The Hub" />
      </NavLink>
    </div>
  </nav>
);

NavDesktop.propTypes = {
  user: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  changeUserView: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default NavDesktop;
