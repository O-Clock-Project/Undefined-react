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
import Nav from 'src/components/Nav';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <header id="navbar"><Nav /></header>
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
