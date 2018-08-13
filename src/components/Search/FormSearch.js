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

    {/* Categories */}
    <div className="search_form_tags">
      {/* Category 1 */}
      <div className="search_form_tag">
        <p className="search_form_label">Veuillez selectionner un support :</p>
        <select className="search_form_select">
          <option value="all">All</option>
          <option value="audio">Audio</option>
          <option value="video">Vidéo</option>
          <option value="article">Article</option>
        </select>
      </div>
      {/* Category 2 */}
      <div className="search_form_tag">
        <p className="search_form_label">Veuillez selectionner une langue :</p>
        <select className="search_form_select">
          <option value="All">All</option>
          <option value="french">Français</option>
          <option value="english">Anglais</option>
        </select>
      </div>
      {/* Category 3 */}
      <div className="search_form_tag">
        <p className="search_form_label">Veuillez selectionner un niveau :</p>
        <select className="search_form_select">
          <option value="All">All</option>
          <option value="debutant">Débutant</option>
          <option value="confirmed">Confirmé</option>
          <option value="expert">Expert</option>
        </select>
      </div>
    </div>

    <div className="search_form_tags">
      {/* Category 4 */}
      <div className="search_form_tag">
        <p className="search_form_label">Champs libre 1</p>
        <select className="search_form_select">
          <option value="all">All</option>
          <option value="tags_1">Tags 1</option>
        </select>
      </div>
      {/* Category 5 */}
      <div className="search_form_tag">
        <p className="search_form_label">Champs libre 2</p>
        <select className="search_form_select">
          <option value="All">All</option>
          <option value="tags_1">Tags 1</option>
        </select>
      </div>
      {/* Category 6 */}
      <div className="search_form_tag">
        <p className="search_form_label">Champs libre 3</p>
        <select className="search_form_select">
          <option value="All">All</option>
          <option value="tags_1">Tags 1</option>
        </select>
      </div>
    </div>

  </form>

);

/**
 * Export
 */
export default FormSearch;
