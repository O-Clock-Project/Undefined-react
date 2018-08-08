/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import HeaderNav from 'src/components/HeaderNav';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <div id="navbar"><HeaderNav /></div>
    <div id="main">
      <div id="mainLeft">
        Main left
      </div>
      <div id="mainRight">
        Main right
      </div>
    </div>
    <div id="footer">footer</div>
  </div>
);

/**
 * Export
 */
export default App;
