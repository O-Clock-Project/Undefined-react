/**
 * Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import PromoComment from './PromoComment';

// Styles et assets

/**
 * Code
 */
const PromoComments = ({
  comments, loadedComments,
}) => (
  <Fragment>
    {comments.map(comment => (
      loadedComments && <PromoComment key={comment.id} {...comment} />
    ))}
  </Fragment>
);

PromoComments.propTypes = {
  comments: PropTypes.array.isRequired,
  loadedComments: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default PromoComments;
