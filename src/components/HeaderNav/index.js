/**
 * Import
 */
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
} from 'reactstrap';
import {
  FaHome, FaBook, FaUserCircle,
} from 'react-icons/fa';

/**
 * Local import
 */
// Composants

// Styles et assets
import './header_nav.sass';

import logo from 'src/assets/images/logo_bold_jaune.png';
// import profile from 'src/assets/images/profile.svg';
import avatar from 'src/assets/images/avatar.jpg';

/**
 * Code
 */
class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <img src={avatar} alt="" className="profile mr-3" />
              </NavItem>
              <NavItem>
                <NavLink href="#"><FaHome className="svg-link" /> Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><FaBook className="svg-link" /> Bookmarks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><FaUserCircle className="svg-link" /> Profil</NavLink>
              </NavItem>
            </Nav>
            <img src={logo} alt="" className="logo" />
            <Nav className="search" navbar>
              <NavItem>
                <Form className="search-form">
                  <Input className="search-input" type="text" name="search" id="search" placeholder="Rechercher" />
                </Form>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ml-2">?</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/**
 * Export
 */
export default HeaderNav;
