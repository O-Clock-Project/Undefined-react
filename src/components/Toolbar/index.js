/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaSortUp, FaSortDown, FaPencilAlt } from 'react-icons/fa';
import {
  IoIosStar,
  IoIosStarOutline,
} from 'react-icons/io';

/**
 * Local import
 */
// Composants
import './toolbar.sass';

// Styles et assets
import certified from 'src/assets/images/certified.svg';

/**
 * Code
 */
class Toolbar extends React.Component {
  static propTypes = {
    // From Ressource
    bookmarkId: PropTypes.number.isRequired,
    votes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.number,
    }).isRequired).isRequired,
    favedBy: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
    }).isRequired).isRequired,
    userOwner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    certifiedBy: PropTypes.arrayOf(PropTypes.object).isRequired,
    // From Store
    currentUserId: PropTypes.number.isRequired,
    showEditBookmark: PropTypes.func.isRequired,
    favRessource: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    getVote: PropTypes.func.isRequired,
    userVoteForBookmark: PropTypes.number.isRequired,
    userVoteforBookmarkId: PropTypes.number,
    voteUp: PropTypes.func.isRequired,
    dispatchVote: PropTypes.func.isRequired,
  }

  static defaultProps = {
    userVoteforBookmarkId: null,
  };

  componentDidMount() {
    const { getVote, currentUserId, bookmarkId } = this.props;
    getVote(currentUserId, bookmarkId);
  }

  checkFavorite = () => {
    const { favedBy, currentUserId } = this.props;
    let result = false;

    favedBy.forEach((favedUser) => {
      if (favedUser.id === currentUserId) {
        result = true;
      }
    });

    return result;
  }

  handleFavorite = () => {
    // Needed data from props
    const {
      currentUserId,
      bookmarkId,
      favRessource,
      favedBy,
      currentUser,
    } = this.props;
    // New favedBy for state update
    let newFavedBy = [];
    // Action type for request
    let type = '';
    // Check if the bookmark is allready favorite by the user
    if (this.checkFavorite()) {
      // Request type remove
      type = 'remove';
      // New favedBy
      newFavedBy = favedBy.filter(faved => faved.id !== currentUserId);
    }
    else {
      // Request type add
      type = 'add';
      // New favedBy
      newFavedBy = [
        ...favedBy,
        { id: currentUserId, username: currentUser.username },
      ];
    }
    // I dispacth the action with the data
    favRessource(type, bookmarkId, currentUserId, newFavedBy);
  }

  handleVoteUp = () => {
    // What I need from the props
    const {
      userVoteForBookmark,
      currentUserId,
      bookmarkId,
      voteUp,
      userVoteforBookmarkId,
    } = this.props;
    // The type of the vote
    let typeVote = '';
    // The new vote value
    let newVoteValue = 0;

    // Switch case :
    if (userVoteForBookmark === 0) {
      // Type is create
      typeVote = 'post';
      // Value for new vote
      newVoteValue = 1;
    }
    else {
      // Type is delete
      typeVote = 'delete';
      newVoteValue = 5;
    }

    // Dispatch for middleware request
    voteUp(typeVote, newVoteValue, currentUserId, bookmarkId, userVoteforBookmarkId);
  }

  handleVoteDown =() => {
    
  }

  render() {
    const {
      certifiedBy,
      userOwner,
      currentUserId,
      showEditBookmark,
      votes,
      userVoteForBookmark,
    } = this.props;

    return (
      <div id="toolbar">
        {/* Favoried */}
        <div id="toolbar_fav">
          <div id="toolbar_fav_icon">
            {!this.checkFavorite() && <IoIosStarOutline onClick={this.handleFavorite} />}
            {this.checkFavorite() && <IoIosStar onClick={this.handleFavorite} />}
          </div>
        </div>

        {/* Edit */}
        <div id="toolbar_edit" onClick={showEditBookmark}>
          {userOwner.id === currentUserId && (
            <FaPencilAlt id="toolbar_edit_icon" />
          )}
        </div>

        {/* Vote */}
        <div id="toolbar_vote">
          <div id="toolbar_vote_up">
            {userVoteForBookmark === -1 && <FaSortUp onClick={this.handleVoteUp} />}
            {userVoteForBookmark === 0 && <FaSortUp onClick={this.handleVoteUp} />}
          </div>
          <div id="toolbar_vote_content">
            {votes.reduce((cumul, vote) => (
              cumul + vote.value), 0)}
          </div>
          <div id="toolbar_vote_down">
            {userVoteForBookmark === 1 && <FaSortDown />}
            {userVoteForBookmark === 0 && <FaSortDown />}
          </div>
        </div>

        {/* Certified */}
        <div id="toolbar_certified">
          {certifiedBy.length > 0 && <img src={certified} alt="certified" id="toolbar_certificat" />}
        </div>

      </div>
    );
  }
}

/**
 * Export
 */
export default Toolbar;
