/**
 * Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import PromoLink from './PromoLink';

// Styles et assets

/**
 * Code
 */
const PromoLinks = ({ idPromo, promoLinks, schoolLinks }) => (
  <Fragment>
    {idPromo !== 4
    && (
    <div className="links">
      {promoLinks.map(link => (
        <PromoLink
          key={link.id}
          {...link}
        />
      ))}
    </div>
    )}
    <div className="links">
      {schoolLinks.map(link => (
        <PromoLink
          key={link.id}
          {...link}
        />
      ))}
    </div>
  </Fragment>
);

PromoLinks.propTypes = {
  idPromo: PropTypes.number.isRequired,
  promoLinks: PropTypes.array.isRequired,
  schoolLinks: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default PromoLinks;
