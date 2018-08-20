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

/**
 * Local import
 */
// Composants


// Styles et assets
import './ressource.sass';
import preview from 'src/assets/images/preview.jpg';

/**
 * Code
 */
const Ressource = ({
  bookmark,
}) => (
  <div id="ressource">
    {/* Ressource title */}
    <h1 id="ressource_title">{bookmark.title}</h1>

    {/* Ressource infos */}
    <p id="ressource_infos">
      <span id="ressource_author">{bookmark.author} - </span>
      <span id="ressource_published">{moment(bookmark.published_at).format('DD/MM/YYYY')} - </span>
      <span id="ressource_proposed">Proposé par {bookmark.user.username}</span>
    </p>

    {/* Ressource presentation */}
    <p id="ressource_presentation">
      {bookmark.resume}
    </p>

    {/* Ressources tags */}
    <div id="ressource_tags">
      <div className="ressource_tags_line">
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">{bookmark.support.name}</div>
          <div className="tag_right" />
        </div>
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">{bookmark.locale.name}</div>
          <div className="tag_right" />
        </div>
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">{bookmark.difficulty.name}</div>
          <div className="tag_right" />
        </div>
      </div>
      <div className="ressource_tags_line">
        {bookmark.tags.map(tag => (
          <div className="ressource_tags_tag">
            <div className="tag_left" />
            <div className="tag_content">{tag.label}</div>
            <div className="tag_right" />
          </div>
        ))}
      </div>
    </div>

    {/* Ressources buttons */}

    {/* Ressource links and preview */}
    <div id="ressource_preview">
      <div id="ressource_preview_section">
        <p id="ressource_preview_title">Previsualisation</p>
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

      <div id="ressource_link">
        <p>Lien vers le bookmark :</p>
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">URL du bookmark</a>
      </div>
      <div id="ressource_capture">
        <img
          id="ressource_image"
          src={bookmark.image === '' ? preview : bookmark.image}
          alt="preview"
        />
      </div>
    </div>

    {/* Return */}
    {/* TODO: return link */}
    <button type="button" className="search_button">Retour</button>

  </div>
);

Ressource.propTypes = {
  bookmark: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
};

/**
 * Export
 */
export default Ressource;
