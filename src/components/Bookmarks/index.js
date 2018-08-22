/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';

/**
 * Local import
 */
// Composants
import Bookmark from 'src/containers/Bookmark/Bookmark';

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
    direction: PropTypes.string.isRequired,
    changeDirection: PropTypes.func.isRequired,
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

  handleDirection = () => {
    // I prepare my action creator
    const { changeDirection, requestBookmarks } = this.props;
    // I change the state with action creator
    changeDirection();
    // Request for news bookmarks
    requestBookmarks();
  }

  render() {
    const {
      bookmarks,
      status,
      ordering,
      results,
      direction,
    } = this.props;

    return (
      <div id="bookmarks">
        <form id="bookmarks_form">
          <p id="bookmarks_title">Trier les bookmarks</p>
          {/* Ordering */}
          <div id="bookmarks_ordering">
            {/* Order asc/desc */}
            <div id="bookmarks_arrows">
              {direction === 'asc' && <FaSortAmountUp onClick={this.handleDirection} />}
              {direction === 'desc' && <FaSortAmountDown onClick={this.handleDirection} />}
            </div>
            {/* Order type */}
            <select name="ordering" id="bookmarks_select" value={ordering} onChange={this.handleChange}>
              <option value="created_at">Ajout</option>
              <option value="published_at">Publication</option>
              <option value="votes">Votes</option>
              <option value="faved_by">Favoris</option>
            </select>
          </div>
        </form>

        {/* No results */}
        {results === false && (
          <div id="bookmarks_results">Aucun résultat. Veuillez modifier votre recherche !</div>
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
