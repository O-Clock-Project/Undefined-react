/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

const mapStateToProps = state => ({
  loaded: state.loaded,
});

const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(App);
*/

/**
 * Export
 */
export default AppContainer;
