/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Promo from 'src/components/Promo';

// Action Creators
// import { loadUserView } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  promo: state.main.promo,
  loaded: state.main.loaded_promo,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const PromoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Promo);


/**
 * Export
 */
export default withRouter(PromoContainer);
