/**
 * Import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Promo from 'src/containers/Promo/Promo';
import Profile from 'src/containers/Profile/Profile';
import Search from 'src/containers/Search/Search';
import Ressource from 'src/containers/Ressource/Ressource';
import Infos from 'src/components/Infos';
import NotFound from 'src/components/NotFound';


// Styles et assets
import './mainleft.sass';

/**
 * Code
 */
const Mainleft = () => (
  <div id="mainleft">
    <Switch>
      <Redirect exact from="/" to="/app" />
      <Route exact path="/app" component={Promo} />
      <Route exact path="/app/announces/:id" component={Promo} />
      <Route exact path="/app/profile/:id" component={Profile} />
      <Route exact path="/app/bookmarks" component={Search} />
      <Route exact path="/app/bookmarks/:id" component={Ressource} />
      <Route exact path="/app/informations" component={Infos} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default Mainleft;
