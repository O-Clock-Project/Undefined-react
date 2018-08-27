/**
 * Import
 */
import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants

// Styles et assets
import './404.sass';
import logo404 from 'src/assets/images/logo_404.png';

/**
 * Code
 */
const NotFound = () => (
  <div className="not_found">
    <img className="not_found-logo" src={logo404} alt="Erreur 404" />
    <div className="not_found-message">
      <p>"Ah non, ça c'est que nous.</p>
      <p>Parce qu'il faut être capable de passer pour des cons en un temps record.</p>
      <p>Ah non, là dessus on a une avance considérable."</p>
      <p className="not_found-author">Arthur, Livre I, 20 - La Dent de Requin</p>
    </div>
  </div>
);

/**
 * Export
 */
export default NotFound;
