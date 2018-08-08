/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Message from 'src/components/Message';

// Styles et assets
import './channel.sass';

/**
 * Code
 */
const Channel = () => (
  <div id="channel">
    <Message />
    <Message />
  </div>
);

/**
 * Export
 */
export default Channel;
