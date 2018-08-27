/**
 * Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import PromoMessage from './PromoMessage';

// Styles et assets

/**
 * Code
 */
const PromoChannel = ({ announces, loadedAnnounces }) => (
  <Fragment>
    {loadedAnnounces
      && (
      <div id="channel">
        {announces.map(announce => (
          <PromoMessage
            key={announce.id}
            {...announce}
          />
        ))}
      </div>
      )
    }
  </Fragment>
);

PromoChannel.propTypes = {
  announces: PropTypes.array.isRequired,
  loadedAnnounces: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default PromoChannel;
