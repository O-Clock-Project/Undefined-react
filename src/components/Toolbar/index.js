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

  }

  render() {
    const {
      certifiedBy,
      userOwner,
      currentUserId,
      showEditBookmark,
    } = this.props;
    return (
      <div id="toolbar">

        {/* Favoried */}
        {console.log(this.checkFavorite())}
        <div id="toolbar_fav">
          <div id="toolbar_fav_icon">
            {!this.checkFavorite() && <IoIosStarOutline />}
            {this.checkFavorite() && <IoIosStar />}
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
            <FaSortUp />
          </div>
          <div id="toolbar_vote_content">
            52
          </div>
          <div id="toolbar_vote_down">
            <FaSortDown />
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
