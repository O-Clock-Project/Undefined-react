/**
 * Import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import BookmarksContainer from 'src/containers/Bookmarks/Bookmarks';
import PromoAnnounce from 'src/containers/Promo/PromoAnnounce';
import InfosCharte from 'src/components/Infos/InfosCharte';
import NotFound from 'src/components/NotFound';


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
        sensitive
        exact
        path="/app/announces/:id"
        component={PromoAnnounce}
      />
      <Route
        exact
        path="/app/profile/:id"
        component={BookmarksContainer}
      />
      <Route exact path="/app/bookmarks" component={BookmarksContainer} />
      <Route
        exact
        path="/app/bookmarks/:id"
        component={BookmarksContainer}
      />
      <Route exact path="/app/informations" component={InfosCharte} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default Mainright;
