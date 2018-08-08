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
    <h1 id="home_title">Invaders</h1>
    <p id="home_intro">Spécialité - Professeur référent - Tuteur</p>
    <Channel />
    <span id="border" />
    <Links />
  </div>
);

/**
 * Export
 */
export default Home;
