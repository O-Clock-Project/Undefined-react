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
import './bookmark.sass';
import certified from 'src/assets/images/certified.svg';

/**
 * Code
 */
const Bookmark = ({
  icon,
  title,
  certified_by,
  published_at,
  author,
  user,
  tags,
  faved_by,
  votes,
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
        <span className="bookmark_infos_date"> {moment(published_at).format('DD-MM-YYYY')} -</span>
        <span className="bookmark_infos_author"> {author} -</span>
        <span className="bookmark_infos_proposed"> Proposé par <a href="#"> {user.username}</a></span>
      </div>
      {/* Bookmark tags */}
      <ul className="bookmark_tags">
        {tags.map(tag => (
          <li key={tag.id}><a href="#" className="bookmark_tags_tag">{tag.label}</a></li>
        ))}
      </ul>
    </div>
    <div>
      {/* Bookmark highlight */}
      <div className="bookmark_highlight">
        {/* Votes */}
        <div className="bookmark_highlight_voted">
          <div className="voted_note">{votes.reduce((cumul, vote) => (
            cumul + vote.value), 0)}
          </div>
          <div className="voted_title">votes</div>
        </div>
        {/* Favored */}
        <div className="bookmark_highlight_favored">
          <div className="favored_note">{faved_by.length}</div>
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
  published_at: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  faved_by: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  })).isRequired,
  votes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
  })).isRequired,
};

/**
 * Export
 */
export default Bookmark;
