/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Mainleft from 'src/containers/Mainleft';
import Mainright from 'src/components/Mainright';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <div id="main_container">
      <header id="navbar">
        <Nav />
      </header>
      <main id="main">
        <Mainleft />
        <Mainright />
      </main>
    </div>
    <div id="footer_container">
      <Footer />
    </div>
  </div>
);

/**
 * Export
 */
export default App;
