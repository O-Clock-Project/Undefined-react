/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Home from 'src/components/Home';
import Profile from 'src/containers/Profile/Profile';
import Search from 'src/components/Search';
import Ressource from 'src/components/Ressource';


// Styles et assets
import './mainleft.sass';

/**
 * Code
 */
const Mainleft = ({ change }) => (
  <div id="mainleft">
    <Switch>
      <Route exact path="/" component={Ressource} />
      {/* <Route exact path="/" component={Home} /> */}
      <Route
        exact
        strict
        path="/profile/:id"
        component={Profile}
        // render={({ match }) => {
        //   const { id } = match.params;
        //   loadUserView(id);
        //   return <Profile />;
        // }}
      />
      <Route exact path="/bookmarks" component={Search} />
    </Switch>
  </div>
);

Mainleft.propTypes = {
  loadUserView: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Mainleft;
