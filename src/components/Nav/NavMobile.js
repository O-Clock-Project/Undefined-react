/**
 * Import
 */
import React from 'react';
import classNames from 'classnames';
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
        <div className="navbar-end">
          <a href="#" className="navbar-link"><img className="navbar-logo" src={logo} alt="Logo The Hub" /></a>
          <IoIosMenu className="navbar-burger" onClick={this.toggleNavbar} />
        </div>
        <div className={classCSS}>
          <a href="#" className="navbar-link"><FaHome className="font-svg" /> Accueil</a>
          <a href="#" className="navbar-link"><FaBook className="font-svg" /> <span>Bookmarks</span></a>
          <a href="#" className="navbar-link"><FaUserCircle className="font-svg" /> <span>Profil</span></a>
          <a href="#" className="navbar-link"><FaInfoCircle className="font-svg" /> <span>Informations</span></a>
        </div>
      </nav>
    );
  }
}

/**
 * Export
 */
export default NavMobile;
