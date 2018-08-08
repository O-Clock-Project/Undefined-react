/**
 * Import
 */
import React from 'react';
import { FaComment } from 'react-icons/fa';

/**
 * Local import
 */
// Composants


// Styles et assets
import './message.sass';

/**
 * Code
 */
const Message = () => (
  <div className="message">
    <div className="message_image"><img src="src/assets/images/avatar.jpg" alt="profile" /></div>
    <div className="message_container">
      <div className="message_content">
        <span className="message_author">BenDevil</span>
        <span className="message_date">08.08.2018 - </span>
        <span className="message_count">25 commentaires</span>
        <p className="message_abstract">Mon message pour tous les loulous de la promotion Invaders (j'aime pas les annonces !)</p>
      </div>
      <div className="message_icon"><FaComment /></div>
    </div>
  </div>
);

/**
 * Export
 */
export default Message;
