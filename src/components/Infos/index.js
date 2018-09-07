/**
 * Import
 */
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

/**
 * Local import
 */
// Composants
import InfosWhoWeAre from './InfosWhoWeAre';
import InfosCharte from './InfosCharte';

// Styles et assets
import './infos.sass';

/**
 * Code
 */
class Infos extends React.Component {
  componentDidMount() {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="infos left">
        <h1 className="infos_title">Informations</h1>
        <InfosWhoWeAre />
        <InfosCharte />
      </div>
    );
  }
}

/**
 * Export
 */
export default Infos;
