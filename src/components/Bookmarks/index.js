/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
  };

  handleChange = (evt) => {
    // I prepare my action creator
    const { changeOrderingValue } = this.props;
    // I catch the value of the selector
    const { value } = evt.target;
    // I change the state with action creator
    changeOrderingValue(value);
  }

  render() {
    const { bookmarks, status, ordering } = this.props;

    return (
      <div id="bookmarks">
        <form id="bookmarks_form">
          <p id="bookmarks_title">Trier les bookmarks</p>
          {/* Select ordering */}
          <select name="ordering" id="bookmarks_select" value={ordering} onChange={this.handleChange}>
            <option value="last">Plus récents</option>
            <option value="old">Plus anciens</option>
            <option value="voted">Mieux notés</option>
            <option value="favored">Favoris</option>
          </select>
        </form>
        {status === 'loading' && <div>Loading ...</div>}
        {status === 'loaded'
          && <div id="bookmarks_list">{bookmarks.map(bookmark => (<Bookmark key={bookmark.id} {...bookmark} />))}</div>
        }
      </div>
    );
  }
}

/**
 * Export
 */
export default Bookmarks;
