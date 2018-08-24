/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import PromoChannel from 'src/components/Promo/PromoChannel';

// Action Creators
import { loadComments } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  announces: state.main.announces,
  loadedAnnounces: state.main.loaded_announces,
});

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  loadComments: (id) => {
    dispatch(loadComments(id));
  },
});

// Container
const PromoChannelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PromoChannel);


/**
 * Export
 */
export default withRouter(PromoChannelContainer);
