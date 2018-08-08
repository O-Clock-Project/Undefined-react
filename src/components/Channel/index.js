/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants


// Styles et assets
import './channel.sass';

/**
 * Code
 */
const Channel = () => (
  <div id="channel">
    <div className="message">
      <span className="message_author">
        Benoclock :
      </span>
      <span className="messagecontent">
        Allez travailler bande de feignants !
      </span>
    </div>
    <div className="message">
      <span className="message_author">
        Julien :
      </span>
      <span className="messagecontent">
        Oui maître !
      </span>
    </div>
  </div>
);

/**
 * Export
 */
export default Channel;
