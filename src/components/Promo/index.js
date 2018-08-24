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
import PromoChannel from './PromoChannel';


// Styles et assets
import './promo.sass';

/**
 * Code
 */
class Promo extends React.Component {
  static propTypes = {
    promo: PropTypes.object.isRequired,
    loaded: PropTypes.bool.isRequired,
  }

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
    const { promo, loaded } = this.props;
    return (
      <div id="home">
        {loaded && <h1 id="home_title">{promo.name}</h1>}
        {loaded && <PromoChannel />}
        <span id="border" />
        {loaded && <PromoLinks />}
      </div>
    );
  }
}

/**
 * Export
 */
export default Promo;
