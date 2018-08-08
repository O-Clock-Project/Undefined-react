/**
 * Import
 */
import React from 'react';
import {
  FaHome, FaBook, FaUserCircle, FaInfoCircle,
} from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

/**
 * Local import
 */
// Composants

// Styles et assets
import './nav.sass';

import logo from 'src/assets/images/logo_bold_jaune.png';
// import profile from 'src/assets/images/profile.svg';
import avatar from 'src/assets/images/avatar.jpg';

/**
 * Code
 */
const Nav = () => (
  <nav className="navbar">
    <div className="navbar-start">
      <a href="#" className="navbar-link"><img className="navbar-avatar" src={avatar} alt="Votre avatar" /></a>
      <a href="#" className="navbar-link"><FaHome className="font-svg" /> Accueil</a>
      <a href="#" className="navbar-link"><FaBook className="font-svg" /> <span>Bookmarks</span></a>
      <a href="#" className="navbar-link"><FaUserCircle className="font-svg" /> <span>Profil</span></a>
      <a href="#" className="navbar-link"><FaInfoCircle className="font-svg" /> <span>Informations</span></a>
    </div>
    <div className="navbar-end">
      <a href="#" className="navbar-link"><img className="navbar-logo" src={logo} alt="Logo The Hub" /></a>
      <IoIosMenu className="navbar-burger" />
    </div>
  </nav>
);

/**
 * Export
 */
export default Nav;
