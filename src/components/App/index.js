/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Mainleft from 'src/components/Mainleft';
import Mainright from 'src/components/Mainright';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <div id="navbar">navbar</div>
    <div id="main">
      <Mainleft />
      <Mainright />
    </div>
    <div id="footer">footer</div>
  </div>
);

/**
 * Export
 */
export default App;
