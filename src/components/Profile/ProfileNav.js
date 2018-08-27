/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants


// Styles et assets

/**
 * Code
 */
class ProfileNav extends React.Component {
  static propTypes = {
    idUser: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    loadBookmarksByUser: PropTypes.func.isRequired,
    loadFavoritesForUser: PropTypes.func.isRequired,
    requestBookmarks: PropTypes.func.isRequired,
  }

  handleClickOnBookmarkByUser = () => {
    const { loadBookmarksByUser, requestBookmarks } = this.props;
    loadBookmarksByUser();
    requestBookmarks();
  }

  handleClickOnFavoritesForUser = () => {
    const { loadFavoritesForUser, requestBookmarks } = this.props;
    loadFavoritesForUser();
    requestBookmarks();
  }

  render() {
    const { idUser, user } = this.props;
    return (
      <div className="profile-nav">
        <div className="profile-nav-link" onClick={this.handleClickOnBookmarkByUser}>
          <p>{idUser === user.id ? 'Mes Bookmarks' : 'Ses Bookmarks'}</p>
          <p className="profile-nav-count">{user.bookmarks.length}</p>
        </div>
        <div className="profile-nav-link" onClick={this.handleClickOnFavoritesForUser}>
          <p>{idUser === user.id ? 'Mes Favoris' : 'Ses Favoris'}</p>
          <p className="profile-nav-count">{user.favorites.length}</p>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default ProfileNav;
