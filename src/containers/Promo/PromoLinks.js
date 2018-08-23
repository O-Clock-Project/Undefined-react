/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import PromoLinks from 'src/components/Promo/PromoLinks';

// Action Creators
// import { loadUserView } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  idPromo: state.main.promo.id,
  promoLinks: state.main.promo.links,
  schoolLinks: state.main.school_links,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const PromoLinksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PromoLinks);


/**
 * Export
 */
export default PromoLinksContainer;
