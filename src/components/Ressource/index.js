/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  FaFilm,
  FaHeadphones,
  FaFileAlt,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import ReactLoading from 'react-loading';

/**
 * Local import
 */
// Composants
import Toolbar from 'src/components/Toolbar';

// Styles et assets
import './ressource.sass';

/**
 * Code
 */
class Ressource extends React.Component {
  static propTypes = {
    bookmark: PropTypes.shape({
      id: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      resume: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      published_at: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      support: PropTypes.object.isRequired,
      difficulty: PropTypes.object.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
      votes: PropTypes.array.isRequired,
      faved_by: PropTypes.array.isRequired,
      certified_by: PropTypes.array.isRequired,
      tags: PropTypes.array.isRequired,
      locale: PropTypes.object.isRequired,
    }).isRequired,
    status: PropTypes.oneOf(['loading', 'loaded']).isRequired,
  }

  componentDidUpdate() {
    // Scroll to top
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    const { bookmark, status } = this.props;
    return (
      <div>
        {/* Loading */}
        {status === 'loading' && (
          <div className="loading">
            <ReactLoading
              type="spinningBubbles"
              color="#e8ddcb"
              className="react_loading"
              width="5%"
              height="5%"
            />
          </div>)}

        {/* Ressource */}
        {status === 'loaded' && (
          <div id="ressource">
            {/* Ressource title */}
            <h1 id="ressource_title">{bookmark.title}</h1>

            {/* Ressource infos */}
            <p id="ressource_infos">
              <span id="ressource_proposed">Par {bookmark.user.username} le {moment(bookmark.created_at).format('DD/MM/YYYY')} - </span>
              <span id="ressource_published">Publié en {moment(bookmark.published_at).format('YYYY')}, </span>
              <span id="ressource_author">{bookmark.author}</span>
            </p>

            <div id="ressource_container">
              {/* Ressource presentation */}
              <p id="ressource_presentation">
                {bookmark.resume}
              </p>

              {/* Ressources toolbar */}
              <div id="ressource_toolbar">
                <Toolbar
                  votes={bookmark.votes}
                  favedBy={bookmark.faved_by}
                  userOwner={bookmark.user}
                />
              </div>
            </div>

            {/* Ressources tags */}
            <div id="ressource_tags">
              <div className="ressource_tags_tag ressource_tags_tag--tag1">
                {bookmark.locale.name}
              </div>
              <div className="ressource_tags_tag ressource_tags_tag--tag2">
                {bookmark.difficulty.name}
              </div>
              {bookmark.tags.map(tag => (
                <div className="ressource_tags_tag" key={tag.id}>{tag.label}</div>
              ))}
            </div>

            {/* Ressource preview */}
            <div id="ressource_preview">
              <div id="ressource_preview_section">
                <p id="ressource_preview_title">Lien vers la ressource</p>
                <div>
                  {bookmark.support.icon === 'FaFilm'
                    && <FaFilm id="ressource_preview_icon" />
                  }
                  {bookmark.support.icon === 'FaHeadphones'
                    && <FaHeadphones id="ressource_preview_icon" />
                  }
                  {bookmark.support.icon === 'FaFileAlt'
                    && <FaFileAlt id="ressource_preview_icon" />
                  }
                </div>
              </div>

              <div id="ressource_capture">
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                  <img
                    id="ressource_image"
                    src={bookmark.image}
                    alt="preview"
                  />
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
    );
  }
}

/**
 * Export
 */
export default Ressource;
