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
import Footer from 'src/components/Footer';

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
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
