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
import { loadAnnounces } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  promo: state.main.promo,
  loadedPromo: state.main.loaded_promo,
});

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  loadAnnounces: (id) => {
    dispatch(loadAnnounces(id));
  },
});

// Container
const PromoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Promo);


/**
 * Export
 */
export default withRouter(PromoContainer);
