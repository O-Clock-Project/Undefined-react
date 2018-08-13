/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import FormSearch from './FormSearch';


// Styles et assets
import './search.sass';

/**
 * Code
 */
class Search extends React.Component {
  state = {

  }

  handleSubmit = (evt) => {
    // J'annule le comportement par défaut
    evt.preventDefault();
    // Je récupère les données les données (pas de traitement spécifique)
    const message = evt.target.elements[0].value;
    // Je récupère les fonctionnalités via les props
    const { messageSend } = this.props;
    // J'execute le dispatch pour modifier le store
    messageSend(message);
    // Je vide l'input
    evt.target.elements[0].value = '';
  }

  render() {
    return (
      <div id="search">
        <h1 id="search_title">Les Bookmarks</h1>

        <p id="search_intro">Spécialité - Professeur référent - Tuteur</p>

        <h2 id="search_title_abstract">Un petit texte d'intro ? Ici, on n'est pas chez Wikipédia</h2>

        <p id="search_abstract"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur quia sint excepturi non suscipit porro nemo adipisci aspernatur beatae voluptatem maiores veritatis labore mollitia. Accusamus minus animi aliquam rerum error ipsam tempore provident necessitatibus deleniti? Quisquam sapiente laudantium ipsum totam consequatur nemo alias doloribus eos quaerat officia saepe nihil ducimus ab, amet asperiores, molestiae voluptas nesciunt. Nisi atque voluptatem earum cumque exercitationem quidem rem adipisci deleniti, soluta nam harum voluptatum perspiciatis animi laboriosam dolore facere temporibus eligendi totam sint sapiente necessitatibus! Laboriosam suscipit enim laudantium cupiditate non ipsa omnis ratione. Omnis aut ratione unde, cupiditate perferendis reiciendis fuga, natus repellendus dicta nulla voluptatum reprehenderit asperiores illum suscipit magnam iure temporibus aliquid saepe quae deserunt iste fugiat tenetur doloremque. Molestias quo corrupti amet dicta tenetur. </p>

        <div id="search_buttons">
          <button type="button" className="search_button">Ajouter</button>
          <button type="button" className="search_button">Favoris</button>
        </div>

        {/* Formulaire d'ajout ou de recherche */}
        <FormSearch />
      </div>
    );
  }
}

/**
 * Export
 */
export default Search;
