/**
 * Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Formatizer } from 'formatizer';

/**
 * Local import
 */
// Composants
import PromoComments from 'src/containers/Promo/PromoComments';
import PromoAddComment from './PromoAddComment';

// Styles et assets

/**
 * Code
 */
class PromoAnnounce extends React.Component {
  static propTypes = {
    promo: PropTypes.object.isRequired,
    idAnnounce: PropTypes.string.isRequired,
    loadAnnounce: PropTypes.func.isRequired,
    loadComments: PropTypes.func.isRequired,
    announceView: PropTypes.object.isRequired,
    loadedAnnounce: PropTypes.bool.isRequired,
    addComment: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { idAnnounce, loadAnnounce, loadComments } = this.props;
    loadAnnounce(idAnnounce);
    loadComments(idAnnounce);
  }

  componentDidUpdate(prevProps) {
    const { idAnnounce, loadAnnounce, loadComments } = this.props;
    if (idAnnounce !== prevProps.idAnnounce) {
      loadAnnounce(idAnnounce);
      loadComments(idAnnounce);
    }
  }

  handleClick = () => {
    scroll.scrollToBottom();
  }

  render() {
    const {
      promo, idAnnounce, loadedAnnounce, announceView, addComment,
    } = this.props;
    const promosAnnounce = ((announceView || {}).promotions || []);
    const authorId = ((announceView || {}).author || {}).id;
    const authorUsername = ((announceView || {}).author || {}).username;
    const comments = ((announceView || {}).comments || []);
    const day = moment(announceView.created_at).format('DD-MM-YYYY');
    const time = moment(announceView.created_at).format('HH:mm:ss');

    return (
      <Fragment>
        {
          loadedAnnounce
        && promosAnnounce.find(promotion => promotion.id === promo.id)
        && (
        <div className="annonce">
          <h1 className="annonce-title">{announceView.title}</h1>
          <div className="annonce-frame">
            <h2 className="annonce-subtitle">Message</h2>
            <p className="annonce-infos">Posté par <NavLink strict to={`/app/profile/${authorId}`}>{authorUsername}</NavLink>, le {day} à {time}</p>
            <div className="annonce-text">
              <Formatizer>{announceView.body}</Formatizer>
            </div>
          </div>
          <div className="annonce-frame">
            <p className="annonce-last" onClick={this.handleClick}>Voir le dernier commentaire</p>
            <h2 className="annonce-subtitle">{comments.length > 1 ? 'Commentaires' : 'Commentaire'} ({comments.length})</h2>
            {comments.length !== 0 && <PromoComments />}
          </div>
          <PromoAddComment
            onSubmit={addComment}
            enableReinitialize
            initialValues={{
              idAnnounce,
            }}
          />
        </div>)
        }

        {
          loadedAnnounce
          && !promosAnnounce.find(promotion => promotion.id === promo.id)
          && (
          <div className="annonce">
            <div className="annonce-frame">
              <div className="annonce-text">
                <Formatizer>Désolé tu n'as pas accès à cette annonce.</Formatizer>
              </div>
            </div>
          </div>)
        }
      </Fragment>
    );
  }
}

/**
 * Export
 */
export default PromoAnnounce;
