/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

/**
 * Local import
 */
// Composants

// Styles et assets

/**
 * Code
 */
class PromoAnnounce extends React.Component {
  // static propTypes = {

  // }

  componentDidMount() {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  componentDidUpdate() {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="annonces">
        <h1 className="annonces-title">Annonces</h1>
      </div>
    );
  }
}

/**
 * Export
 */
export default PromoAnnounce;
