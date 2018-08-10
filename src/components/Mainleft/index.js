/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Home from 'src/components/Home';
import Profile from 'src/containers/Profile';
import Search from 'src/components/Search';


// Styles et assets
import './mainleft.sass';

/**
 * Code
 */
const Mainleft = () => (
  <div id="mainleft">
    <Home />
    {/* <Profile /> */}
    {/* <Search /> */}
  </div>
);

/**
 * Export
 */
export default Mainleft;
