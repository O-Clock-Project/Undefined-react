/**
 * Import
 */
import React from 'react';
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
import avatar from 'src/assets/images/avatar.jpg';

/**
 * Code
 */
const NavDesktop = () => (
  <nav className="navbar">
    <div className="navbar-start">
      {/* Profile */}
      <NavLink
        exact
        to="/profile"
        className="navbar-link"
      >
        <img className="navbar-avatar" src={avatar} alt="Votre avatar" />
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
        exact
        to="/profile"
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

/**
 * Export
 */
export default NavDesktop;
