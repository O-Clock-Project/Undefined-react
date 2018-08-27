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
import FormSearchContainer from 'src/containers/Search/FormSearch';
import SearchAdd from 'src/containers/Search/SearchAdd';


// Styles et assets
import './search.sass';

/**
 * Code
 */
class Search extends React.Component {
  static propTypes = {
    toggleForm: PropTypes.bool.isRequired,
    showAddBookmark: PropTypes.func.isRequired,
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

  handleClick = () => {
    const { showAddBookmark } = this.props;
    showAddBookmark();
  }

  render() {
    const { toggleForm } = this.props;
    return (
      <div id="search">
        <h1 id="search_title">Les Bookmarks</h1>

        <div id="search_container">
          <h2 id="search_title_abstract">Pourquoi avons-nous créé cette section ? </h2>

          <p id="search_abstract"> Nous sommes partis d'un simple constat, il y a pléthore de ressources sur internet, mais la qualité est variable. De plus, durant notre parcours de formation, de nombreuses âmes charitables ont partagé leurs découvertes, mais malheureusement, peu d'outils collaboratifs (gratuits) assurent une pérennité de ces données (par exemple Slack). Alors ici, l'enjeu est simple, partagez ce que vous appréciez, et nous garantirons la survie de ce travail !</p>

          <div id="search_buttons">
            {/* Research or add button */}
            <button type="button" className="search_button" onClick={this.handleClick}>
              {toggleForm && 'Ajouter'}
              {!toggleForm && 'Rechercher'}
            </button>
          </div>

        </div>

        {/* Form add or research */}
        {!toggleForm && <SearchAdd />}
        {toggleForm && <FormSearchContainer />}
      </div>
    );
  }
}

/**
 * Export
 */
export default Search;
