/**
 * Import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Home from 'src/components/Home';
import Profile from 'src/containers/Profile/Profile';
import Search from 'src/components/Search';
import Ressource from 'src/containers/Ressource/Ressource';


// Styles et assets
import './mainleft.sass';

/**
 * Code
 */
const Mainleft = () => (
  <div id="mainleft">
    <Switch>
      <Route exact path="/" component={Ressource} />
      {/* <Route exact path="/" component={Home} /> */}
      <Route
        exact
        strict
        path="/profile/:id"
        component={Profile}
      />
      <Route exact path="/bookmarks" component={Search} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default Mainleft;
