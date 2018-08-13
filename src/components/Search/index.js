/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import FormSearch from './FormSearch';
import FormAdd from './FormAdd';


// Styles et assets
import './search.sass';

/**
 * Code
 */
class Search extends React.Component {
  state = {
    toggleForm: true,
  }

  handleClick = () => {
    const { toggleForm } = this.state;

    this.setState({
      toggleForm: !toggleForm,
    });
  }

  render() {
    const { toggleForm } = this.state;
    return (
      <div id="search">
        <h1 id="search_title">Les Bookmarks</h1>

        <p id="search_intro">Spécialité - Professeur référent - Tuteur</p>

        <div id="search_container">
          <h2 id="search_title_abstract">Un petit texte d'intro ? Ici, on n'est pas chez Wikipédia</h2>

          <p id="search_abstract"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur quia sint excepturi non suscipit porro nemo adipisci aspernatur beatae voluptatem maiores veritatis labore mollitia. Accusamus minus animi aliquam rerum error ipsam tempore provident necessitatibus deleniti? Quisquam sapiente laudantium ipsum totam consequatur nemo alias doloribus eos quaerat officia saepe nihil ducimus ab, amet asperiores, molestiae voluptas nesciunt. Nisi atque voluptatem earum cumque exercitationem quidem rem adipisci deleniti, soluta nam harum voluptatum perspiciatis animi laboriosam dolore facere temporibus eligendi totam sint sapiente necessitatibus! Laboriosam suscipit enim laudantium cupiditate non ipsa omnis ratione. Omnis aut ratione unde, cupiditate perferendis reiciendis fuga, natus repellendus dicta nulla voluptatum reprehenderit asperiores illum suscipit magnam iure temporibus aliquid saepe quae deserunt iste fugiat tenetur doloremque. Molestias quo corrupti amet dicta tenetur. </p>

          <div id="search_buttons">
            {/* Research or add button */}
            <button type="button" className="search_button" onClick={this.handleClick}>
              {toggleForm && 'Ajouter'}
              {!toggleForm && 'Rechercher'}
            </button>
            <button type="button" className="search_button">Favoris</button>
          </div>

        </div>


        {/* Form add or research */}
        {toggleForm && <FormSearch />}
        {!toggleForm && <FormAdd />}
      </div>
    );
  }
}

/**
 * Export
 */
export default Search;
