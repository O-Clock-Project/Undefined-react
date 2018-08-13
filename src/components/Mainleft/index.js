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


// Styles et assets
import './mainleft.sass';

/**
 * Code
 */
const Mainleft = () => (
  <div id="mainleft">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/bookmarks" component={Search} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default Mainleft;
