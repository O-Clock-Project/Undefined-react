/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Nav from 'src/components/Nav';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <header id="navbar"><Nav /></header>
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
