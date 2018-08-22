/**
 * Import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import BookmarksContainer from 'src/containers/Bookmarks/Bookmarks';
import InfosCharte from 'src/components/Infos/InfosCharte';


// Styles et assets
import './mainright.sass';

/**
 * Code
 */
const Mainright = () => (
  <div id="mainright">
    <Switch>
      <Route exact path="/app" component={BookmarksContainer} />
      <Route
        exact
        strict
        path="/app/profile/:id"
        component={BookmarksContainer}
      />
      <Route exact path="/app/bookmarks" component={BookmarksContainer} />
      <Route
        exact
        strict
        path="/app/bookmarks/:id"
        component={BookmarksContainer}
      />
      <Route exact path="/app/informations" component={InfosCharte} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default Mainright;
