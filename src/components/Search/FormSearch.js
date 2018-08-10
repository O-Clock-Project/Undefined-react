/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants


// Styles et assets
import './search.sass';

/**
 * Code
 */
const FormSearch = () => (
  <form id="search_form">
    {/* Title */}
    <p id="search_form_title">Filtrer les bookmarks</p>

    <div id="search_form_container">
      {/* Categories */}
      <div>
        {/* Category 1 */}
        <label htmlFor="tag_1" className="search_form_label">
          Veuillez selectionner une langue :
          <select id="tag_1" className="search_form_select">
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
          </select>
        </label>
        {/* Category 2 */}
        <label htmlFor="tag_2" className="search_form_label">
          Veuillez sélectionner la difficulté :
          <select id="tag_2" className="search_form_select">
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
          </select>
        </label>
        {/* Category 3 */}
        <label htmlFor="tag_3" className="search_form_label">
          veuillez sélectionner le support :
          <select id="tag_3" className="search_form_select">
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
          </select>
        </label>
        {/* Category 4 */}
        <label htmlFor="tag_4" className="search_form_label">
          Sélectionner catégorie libre :
          <select id="tag_4" className="search_form_select">
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
          </select>
        </label>
        {/* Category 5 */}
        <label htmlFor="tag_5" className="search_form_label">
          Sélectionner catégorie libre :
          <select id="tag_5" className="search_form_select">
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
          </select>
        </label>
        {/* Category 6 */}
        <label htmlFor="tag_6" className="search_form_label">
          Sélectionner catégorie libre :
          <select id="tag_6" className="search_form_select">
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
          </select>
        </label>
      </div>

      {/* Form submit */}
      <div className="search_form_submit">
        <button type="submit" value="Submit" className="search_button">Rechercher</button>
      </div>

    </div>

  </form>
);

/**
 * Export
 */
export default FormSearch;
