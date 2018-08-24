/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import PromoComments from 'src/components/Promo/PromoComments';

// Action Creators
// import { loadAnnounce } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  comments: state.main.comments,
  loadedComments: state.main.loaded_comments,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const PromoCommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PromoComments);

/**
 * Export
 */
export default withRouter(PromoCommentsContainer);
