/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import withMobile from 'src/hoc/withMobile';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

// Styles
import './nav.sass';


/**
 * Code
 */
const Nav = ({ mobile }) => (
  <div>
    {!mobile && <NavDesktop />}
    {mobile && <NavMobile />}
  </div>
);

Nav.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default withMobile(Nav, 990);
