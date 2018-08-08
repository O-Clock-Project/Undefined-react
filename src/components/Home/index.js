/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Channel from 'src/components/Channel';
import Links from 'src/components/Links';


// Styles et assets
import './home.sass';

/**
 * Code
 */
const Home = () => (
  <div id="home">
    <h1>Invaders</h1>
    <Channel />
    <Links />
  </div>
);

/**
 * Export
 */
export default Home;
