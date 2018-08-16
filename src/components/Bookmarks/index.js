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
  };

  state = {

  };

  render() {
    const { bookmarks, status } = this.props;

    return (
      <div id="bookmarks">
        <form id="bookmarks_form">
          <p id="bookmarks_title">Trier les bookmarks</p>
          <select name="select" id="bookmarks_select">
            <option value="last">Lasts</option>
            <option value="news">News</option>
          </select>
        </form>
        {status === 'loading' && <div>Loading ...</div>}
        {status === 'loaded'
          && <div id="bookmarks_list"> {bookmarks.map(bookmark => (<Bookmark key={bookmark.id} {...bookmark} />))}</div>
        }
      </div>
    );
  }
}

/**
 * Export
 */
export default Bookmarks;
