/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

/**
 * Local import
 */
// Composants
import Bookmark from 'src/components/Bookmark';

// Styles et assets
import './bookmarks.sass';

/**
 * Code
 */
class Bookmarks extends React.Component {
  static propTypes = {
    bookmarks: PropTypes.array.isRequired,
    status: PropTypes.oneOf(['loading', 'loaded']).isRequired,
    ordering: PropTypes.string.isRequired,
    changeOrderingValue: PropTypes.func.isRequired,
    requestBookmarks: PropTypes.func.isRequired,
    results: PropTypes.bool.isRequired,
  };

  handleChange = (evt) => {
    // I prepare my action creator
    const { changeOrderingValue, requestBookmarks } = this.props;
    // I catch the value of the selector
    const { value } = evt.target;
    // I change the state with action creator
    changeOrderingValue(value);
    // Request for news bookmarks
    requestBookmarks();
  }

  render() {
    const {
      bookmarks,
      status,
      ordering,
      results,
    } = this.props;

    return (
      <div id="bookmarks">
        <form id="bookmarks_form">
          <p id="bookmarks_title">Trier les bookmarks</p>
          {/* Select ordering */}
          <select name="ordering" id="bookmarks_select" value={ordering} onChange={this.handleChange}>
            <option value="created_at">Date d'ajout</option>
            <option value="votes">Par note</option>
            <option value="faved_by">En favoris</option>
          </select>
        </form>

        {/* No results */}
        {results === false && (
          <div id="bookmarks_results">Aucun résultats. Veuillez modifier votre recherche !</div>
        )}

        {/* Loading */}
        {status === 'loading' && results === true && (
          <div className="loading">
            <ReactLoading
              type="spinningBubbles"
              color="#e8ddcb"
              className="react_loading"
              width="5%"
              height="5%"
            />
          </div>)}

        {/* Bookmarks */}
        {status === 'loaded'
          && (
            <div id="bookmarks_list">
              {bookmarks.map(bookmark => (
                <Bookmark
                  key={bookmark.id}
                  {...bookmark}
                />))}
            </div>)}

      </div>
    );
  }
}

/**
 * Export
 */
export default Bookmarks;
