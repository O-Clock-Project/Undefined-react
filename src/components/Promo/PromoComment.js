/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

/**
 * Local import
 */
// Composants

// Styles et assets

/**
 * Code
 */
const PromoComment = ({
  body, created_at: createdAt, author,
}) => {
  const day = moment(createdAt).format('DD-MM-YYYY');
  const time = moment(createdAt).format('HH:mm:ss');
  return (
    <div className="comment">
      <NavLink className="comment_image" strict to={`/app/profile/${author.id}`}><img src={author.avatar} alt="avatar" /></NavLink>
      <div className="comment_container">
        <div className="comment_content">
          <p>Posté par <NavLink className="comment_author" strict to={`/app/profile/${author.id}`}>{author.username}</NavLink>, le {day} à {time}</p>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
};

PromoComment.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default PromoComment;
