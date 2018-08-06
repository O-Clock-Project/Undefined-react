/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import './app.sass';
import android from 'src/assets/icons/android.svg';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <h1 id="app-title">Undefined</h1>
    <img className="icons" src={android} alt=""/>
  </div>
);

/**
 * Export
 */
export default App;
