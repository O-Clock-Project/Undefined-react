/**
 * Import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Home from 'src/components/Home';
import Profile from 'src/containers/Profile/Profile';
import Search from 'src/containers/Search/Search';
import Ressource from 'src/containers/Ressource/Ressource';
import Infos from 'src/components/Infos';


// Styles et assets
import './mainleft.sass';

/**
 * Code
 */
const Mainleft = () => (
  <div id="mainleft">
    <Switch>
      <Redirect exact from="/" to="/app" />
      <Route exact path="/app" component={Home} />
      <Route
        exact
        strict
        path="/app/profile/:id"
        component={Profile}
      />
      <Route exact path="/app/bookmarks" component={Search} />
      <Route
        exact
        strict
        path="/app/bookmarks/:id"
        component={Ressource}
      />
      <Route exact path="/app/informations" component={Infos} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default Mainleft;
