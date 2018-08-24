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
const PromoMessage = ({
  id, title, type, created_at: createdAt, author, comments,
}) => {
  const day = moment(createdAt).format('DD-MM-YYYY');
  const time = moment(createdAt).format('HH:mm:ss');
  return (
    <div className="message">
      <NavLink className="message_image" strict to={`/app/profile/${author.id}`}><img src={author.avatar} alt="avatar" /></NavLink>
      <div className="message_container">
        <NavLink className="message_title" strict to={`/app/announces/${id}`}>{title}</NavLink>
        <div className="message_content">
          <p className="message_type">{type.name}</p>
          <p className="message_infos">
            Posté par
            <NavLink
              strict
              to={`/app/profile/${author.id}`}
            > {author.username}
            </NavLink>, le {day} à {time} - <NavLink strict to={`/app/announces/${id}`}>{comments.length} {comments.length >= 2 ? 'commentaires' : 'commentaire'}</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

PromoMessage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default PromoMessage;
