/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
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
import './bookmark.sass';
import certified from 'src/assets/images/certified.svg';

/**
 * Code
 */
const Bookmark = ({
  icon,
  title,
  certified_by,
}) => (
  <div className="bookmark">
    <div>
      {/* Bookmark identity */}
      <div className="bookmark_identity">
        {icon === 'FaFilm' && <a href="#" className="bookmark_identity_support"><FaFilm /></a>}
        {icon === 'FaHeadphones' && <a href="#" className="bookmark_identity_support"><FaHeadphones /></a>}
        {icon === 'FaFileAlt' && <a href="#" className="bookmark_identity_support"><FaFileAlt /></a>}
        <a href="#" className="bookmark_identity_title">{title}</a>
        {/* Certificat */}
        {certified_by.length > 0 && <img className="bookmark_identity_certificat" src={certified} alt="certified" />}
      </div>
      {/* Bookmark infos */}
      <div className="bookmark_infos">
        <span className="bookmark_infos_date"> 08.08.2018 -</span>
        <span className="bookmark_infos_author"> Nicolas Ouissiaen -</span>
        <span className="bookmark_infos_proposed"> Proposé par <a href="#"> Julien</a></span>
      </div>
      {/* Bookmark tags */}
      <ul className="bookmark_tags">
        <li><a href="#" className="bookmark_tags_tag">HTML</a></li>
        <li><a href="#" className="bookmark_tags_tag">CSS</a></li>
        <li><a href="#" className="bookmark_tags_tag">JavaScript</a></li>
        <li><a href="#" className="bookmark_tags_tag">React.js</a></li>
        <li><a href="#" className="bookmark_tags_tag">Redux</a></li>
        <li><a href="#" className="bookmark_tags_tag">JavaScript</a></li>
      </ul>
    </div>
    <div>
      {/* Bookmark highlight */}
      <div className="bookmark_highlight">
        {/* Votes */}
        <div className="bookmark_highlight_voted">
          <div className="voted_note">5</div>
          <div className="voted_title">votes</div>
        </div>
        {/* Favored */}
        <div className="bookmark_highlight_favored">
          <div className="favored_note">55</div>
          <div className="favored_title">favoris</div>
        </div>
      </div>
    </div>
  </div>
);

Bookmark.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  certified_by: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default Bookmark;
