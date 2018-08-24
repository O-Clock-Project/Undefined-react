/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import avatar from 'src/assets/images/avatar.jpg';

/**
 * Code
 */
const Message = () => (
  <div className="message">
    <a href="#" className="message_image"><img src={avatar} alt="avatar" /></a>
    <div className="message_container">
      <div className="message_content">
        <span className="message_author">BenDevil</span>
        <span className="message_date">08.08.2018 - </span>
        <a href="#" className="message_count">25 commentaires</a>
        <p className="message_abstract">Mon message pour tous les loulous de la promotion Invaders (j'aime pas les annonces !)</p>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Message;
