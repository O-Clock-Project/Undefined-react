/**
 * Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  FaFilm,
  FaHeadphones,
  FaFileAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';
import ReactLoading from 'react-loading';

/**
 * Local import
 */
// Composants
import Toolbar from 'src/containers/Toolbar/Toolbar';
import SearchAddForm from 'src/containers/Search/SearchAddForm';

// Styles et assets
import './ressource.sass';

/**
 * Code
 */
class Ressource extends React.Component {
  static propTypes = {
    idRessource: PropTypes.string.isRequired,
    bookmark: PropTypes.shape({
      id: PropTypes.number,
      created_at: PropTypes.string,
      title: PropTypes.string,
      resume: PropTypes.string,
      url: PropTypes.string,
      image: PropTypes.string,
      published_at: PropTypes.string,
      author: PropTypes.string,
      support: PropTypes.object,
      difficulty: PropTypes.object,
      user: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
      }),
      votes: PropTypes.array,
      faved_by: PropTypes.array,
      certified_by: PropTypes.array,
      tags: PropTypes.array,
      locale: PropTypes.object,
    }),
    status: PropTypes.oneOf(['loading', 'loaded']).isRequired,
    formEditBookmark: PropTypes.bool.isRequired,
    loadRessource: PropTypes.func.isRequired,
    showEditBookmark: PropTypes.func.isRequired,
    editBookmark: PropTypes.func.isRequired,
  }

  static defaultProps = {
    bookmark: {
      id: null,
      created_at: '',
      title: '',
      resume: '',
      url: '',
      image: '',
      published_at: '',
      author: '',
      support: {},
      difficulty: {},
      user: {
        id: null,
        username: '',
      },
      votes: [],
      faved_by: [],
      certified_by: [],
      tags: [],
      locale: {},
    },
  }

  componentDidMount() {
    const { idRessource, loadRessource } = this.props;
    loadRessource(idRessource);

    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  componentDidUpdate(prevProps) {
    const { idRessource, loadRessource } = this.props;
    if (idRessource !== prevProps.idRessource) {
      loadRessource(idRessource);
    }

    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    const {
      bookmark, status, formEditBookmark, showEditBookmark, editBookmark,
    } = this.props;

    return (
      <Fragment>
        {formEditBookmark === false
        && (
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
                    bookmarkId={bookmark.id}
                    votes={bookmark.votes}
                    favedBy={bookmark.faved_by}
                    userOwner={bookmark.user}
                    certifiedBy={bookmark.certified_by}
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
                  <p id="ressource_preview_title"><a href={bookmark.url} target="_blank" rel="noopener noreferrer">Lien vers la ressource</a></p>
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
                  <img
                    id="ressource_image"
                    src={bookmark.image}
                    alt="preview"
                  />
                </div>

              </div>
            </div>
          )}
        </div>
        )}
        {formEditBookmark
        && status === 'loaded' && (
          <div id="search">
            <div className="search_add">
              <MdClose className="profile-edit-tools" onClick={showEditBookmark} />
              <SearchAddForm
                onSubmit={editBookmark}
                enableReinitialize
                initialValues={{
                  id: bookmark.id,
                  title: bookmark.title,
                  resume: bookmark.resume,
                  url: bookmark.url,
                  image: bookmark.image === '/images/default.jpg' ? '' : bookmark.image,
                  published_at: moment(bookmark.published_at).format('YYYY-MM-DD'),
                  author: bookmark.author,
                  select_type: bookmark.support.id,
                  select_language: bookmark.locale.id,
                  select_level: bookmark.difficulty.id,
                  select_tag1: bookmark.tags[0].id,
                  select_tag2: (typeof bookmark.tags[1] !== 'undefined' ? bookmark.tags[1].id : ''),
                  select_tag3: (typeof bookmark.tags[2] !== 'undefined' ? bookmark.tags[2].id : ''),
                }}
              />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

/**
 * Export
 */
export default Ressource;
