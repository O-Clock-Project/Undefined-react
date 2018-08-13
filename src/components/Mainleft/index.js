/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Home from 'src/components/Home';
import Search from 'src/components/Search';


// Styles et assets
import './mainleft.sass';

/**
 * Code
 */
const Mainleft = () => (
  <div id="mainleft">
    <Home />
    {/* <Search /> */}
  </div>
);

/**
 * Export
 */
export default Mainleft;
