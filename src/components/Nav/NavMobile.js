/**
 * Import
 */
import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaBook, FaUserCircle, FaInfoCircle,
} from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

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
class NavMobile extends React.Component {
  state = {
    navOpen: false,
  }

  toggleNavbar = () => {
    const { navOpen } = this.state;

    this.setState({
      navOpen: !navOpen,
    });
  }

  render() {
    const { navOpen } = this.state;
    const classCSS = classNames('navbar-start', { navOpen });

    return (
      <nav className="navbar">
        <div className={classCSS}>
          {/* Home */}
          <NavLink
            exact
            to="/"
            className="navbar-link"
            activeClassName="navbar-link--active"
            onClick={this.toggleNavbar}
          >
            <FaHome className="font-svg" /> Accueil
          </NavLink>
          {/* Bookmarks */}
          <NavLink
            exact
            to="/bookmarks"
            className="navbar-link"
            activeClassName="navbar-link--active"
            onClick={this.toggleNavbar}
          >
            <FaBook className="font-svg" /> Bookmarks
          </NavLink>
          {/* Profile */}
          <NavLink
            exact
            to="/profile"
            className="navbar-link"
            activeClassName="navbar-link--active"
            onClick={this.toggleNavbar}
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
          <div className="navbar-burger"><span className="navbar-burger-text">Menu</span><IoIosMenu onClick={this.toggleNavbar} /></div>
        </div>
      </nav>
    );
  }
}

/**
 * Export
 */
export default NavMobile;
