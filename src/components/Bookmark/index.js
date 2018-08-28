/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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
class Bookmark extends React.Component {
  static propTypes = {
    // Props from Bookmarks
    id: PropTypes.number.isRequired,
    support: PropTypes.shape({
      icon: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
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
    difficulty: PropTypes.shape({
      id: PropTypes.number,
      level: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
    locale: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
    // Props from the store
    dispatchSupport: PropTypes.func.isRequired,
    dispatchTag: PropTypes.func.isRequired,
    dispatchLanguage: PropTypes.func.isRequired,
    dispatchLevel: PropTypes.func.isRequired,
    requestBookmarks: PropTypes.func.isRequired,
    dispatchVote: PropTypes.func.isRequired,
    currentBookmark: PropTypes.object.isRequired,
  };

  handleSupport = () => {
    // Catch item from props
    const { dispatchSupport, requestBookmarks } = this.props;
    // Catch the id of support type
    const { support } = this.props;
    // Dispatch the new property for select
    dispatchSupport(support.id);
    // Request Bookmarks
    requestBookmarks();
  }

  handleTag = (evt) => {
    // Catch item from props
    const { dispatchTag, requestBookmarks } = this.props;
    // Catch the name of tag
    const tag = evt.target.dataset.id;
    // Dispatch the new tag
    dispatchTag(tag);
    // Request Bookmarks
    requestBookmarks();
  }

  handleLanguage = (evt) => {
    // Catch item from props
    const { dispatchLanguage, requestBookmarks } = this.props;
    // Catch the name of language
    const language = evt.target.dataset.id;
    // Dispatch the new language
    dispatchLanguage(language);
    // Request Bookmarks
    requestBookmarks();
  }

  handleLevel = (evt) => {
    // Catch item from props
    const { dispatchLevel, requestBookmarks } = this.props;
    // Catch the name of level
    const level = evt.target.dataset.id;
    // Dispatch the new tag
    dispatchLevel(level);
    // Request Bookmarks
    requestBookmarks();
  }

  handleClick = () => {
    // Take what I need from props
    const { dispatchVote, currentBookmark, id } = this.props;
    // Set the vote value for a bookmarks, preven ta bad display for Toolbar
    if (currentBookmark.id !== id) {
      dispatchVote(5);
    }
  }

  render() {
    const {
      id,
      support,
      title,
      certified_by: certifiedBy,
      published_at: publishedAt,
      author,
      user,
      tags,
      faved_by: favedBy,
      votes,
      difficulty,
      locale,
      created_at: createdAt,
    } = this.props;

    return (
      <div className="bookmark">
        <div>

          {/* Bookmark identity */}
          <div className="bookmark_identity">
            {/* Support  */}
            {support.icon === 'FaFilm'
              && <a href="#" className="bookmark_identity_support" onClick={this.handleSupport}><FaFilm /></a>
            }
            {support.icon === 'FaHeadphones'
              && <a href="#" className="bookmark_identity_support" onClick={this.handleSupport}><FaHeadphones /></a>
            }
            {support.icon === 'FaFileAlt'
              && <a href="#" className="bookmark_identity_support" onClick={this.handleSupport}><FaFileAlt /></a>
            }
            {/* Title */}
            <NavLink
              onClick={this.handleClick}
              strict
              to={`/app/bookmarks/${id}`}
              className="bookmark_identity_title"
            >{title}
            </NavLink>
            {/* Certificat */}
            {certifiedBy.length > 0
              && <img className="bookmark_identity_certificat" src={certified} alt="certified" />
            }
          </div>

          {/* Bookmark infos */}
          <div className="bookmark_infos">
            <span className="bookmark_infos_proposed">Par <NavLink strict to={`/app/profile/${user.id}`}> {user.username}</NavLink> le {moment(createdAt).format('DD/MM/YYYY')} - </span>
            <span className="bookmark_infos_date">Publié en {moment(publishedAt).format('YYYY')},</span>
            <span className="bookmark_infos_author"> {author}</span>
          </div>

          {/* Bookmark tags */}
          <ul className="bookmark_tags">

            <li
              className="bookmark_tags_tag bookmark_tags_tag--tag1"
              data-id={locale.id}
              onClick={this.handleLanguage}
            >{locale.name}
            </li>

            <li
              className="bookmark_tags_tag bookmark_tags_tag--tag2"
              data-id={difficulty.id}
              onClick={this.handleLevel}
            >{difficulty.name}
            </li>

            {tags.map(tag => (
              <li
                className="bookmark_tags_tag"
                key={tag.id}
                data-id={tag.id}
                onClick={this.handleTag}
              >{tag.label}
              </li>
            ))}

          </ul>
        </div>

        {/* Bookmark highlight */}
        <div>
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
              <div className="favored_note">{favedBy.length}</div>
              <div className="favored_title">favoris</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default Bookmark;
