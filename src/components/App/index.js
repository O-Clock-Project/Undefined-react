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
import HeaderNav from 'src/components/HeaderNav';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <div id="navbar"><HeaderNav /></div>
    <main id="main">
      <Mainleft />
      <Mainright />
    </main>
    <footer id="footer">footer</footer>
  </div>
);

/**
 * Export
 */
export default App;
