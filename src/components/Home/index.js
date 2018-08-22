/**
 * Import
 */
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

/**
 * Local import
 */
// Composants
import Channel from 'src/components/Channel';
import Links from 'src/components/Links';


// Styles et assets
import './home.sass';

/**
 * Code
 */
class Home extends React.Component {
  componentDidMount() {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    return (
      <div id="home">
        <h1 id="home_title">Invaders</h1>
        <Channel />
        <span id="border" />
        <Links />
      </div>
    );
  }
}

/**
 * Export
 */
export default Home;
