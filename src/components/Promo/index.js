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
import PromoLinks from 'src/containers/Promo/PromoLinks';
import PromoChannel from 'src/containers/Promo/PromoChannel';


// Styles et assets
import './promo.sass';

/**
 * Code
 */
class Promo extends React.Component {
  static propTypes = {
    promo: PropTypes.object.isRequired,
    loadedPromo: PropTypes.bool.isRequired,
    loadAnnounces: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { loadAnnounces } = this.props;
    loadAnnounces();

    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  componentDidUpdate() {
    const { loadAnnounces } = this.props;
    loadAnnounces();

    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    const { promo, loadedPromo } = this.props;
    return (
      <div id="home">
        {loadedPromo && <h1 id="home_title">{promo.name}</h1>}
        {loadedPromo && <PromoChannel />}
        <span id="border" />
        {loadedPromo && <PromoLinks />}
      </div>
    );
  }
}

/**
 * Export
 */
export default Promo;
