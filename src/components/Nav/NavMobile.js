/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaBook, FaUserCircle, FaInfoCircle, FaSignOutAlt,
} from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

/**
 * Local import
 */
// Composants

// Assets
import logo from 'src/assets/images/logo_bold_jaune.png';

/**
 * Code
 */
class NavMobile extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

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
    const { user } = this.props;
    const { navOpen } = this.state;
    const classCSS = classNames('navbar-start', { navOpen });

    return (
      <nav className="navbar">
        <div className={classCSS}>
          {/* Home */}
          <NavLink
            exact
            to="/app"
            className="navbar-link"
            activeClassName="navbar-link--active"
            onClick={this.toggleNavbar}
          >
            <FaHome className="font-svg" /> Accueil
          </NavLink>
          {/* Bookmarks */}
          <NavLink
            exact
            to="/app/bookmarks"
            className="navbar-link"
            activeClassName="navbar-link--active"
            onClick={this.toggleNavbar}
          >
            <FaBook className="font-svg" /> Bookmarks
          </NavLink>
          {/* Profile */}
          <NavLink
            strict
            to={`/app/profile/${user.id}`}
            className="navbar-link"
            activeClassName="navbar-link--active"
            onClick={this.toggleNavbar}
          >
            <FaUserCircle className="font-svg" /> Profil
          </NavLink>
          {/* Informations */}
          <NavLink
            strict
            to="/app/informations"
            className="navbar-link"
            activeClassName="navbar-link--active"
            onClick={this.toggleNavbar}
          >
            <FaInfoCircle className="font-svg" /> Informations
          </NavLink>
          <NavLink
            exact
            to="/logout"
            className="navbar-link"
            activeClassName="navbar-link--active"
          >
            <FaSignOutAlt className="font-svg" /> Déconnexion
          </NavLink>
        </div>
        <div className="navbar-end">
          {/* Home */}
          <NavLink
            exact
            to="/app"
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
