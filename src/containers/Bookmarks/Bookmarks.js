/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Bookmarks from 'src/components/Bookmarks';

// Action Creators
import { doSomething } from 'src/store/reducer';

// State
const mapStateToProps = state => ({
  bookmarks: state.bookmarks,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const BookmarksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bookmarks);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default BookmarksContainer;
