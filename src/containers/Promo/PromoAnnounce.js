/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import PromoAnnounce from 'src/components/Promo/PromoAnnounce';

// Action Creators
import { loadAnnounce, loadComments, addComment } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    promo: state.main.promo,
    idAnnounce: id,
    announceView: state.main.announce_view,
    loadedAnnounce: state.main.loaded_announce,
  };
};

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  loadAnnounce: (id) => {
    dispatch(loadAnnounce(id));
  },
  loadComments: (id) => {
    dispatch(loadComments(id));
  },
  addComment: (values) => {
    dispatch(addComment(values));
  },
});

// Container
const PromoAnnounceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PromoAnnounce);


/**
 * Export
 */
export default withRouter(PromoAnnounceContainer);
