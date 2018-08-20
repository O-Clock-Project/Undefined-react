/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import SearchAddForm from 'src/containers/Search/SearchAddForm';

// Styles et assets
import './search.sass';

/**
 * Code
 */
const FormAdd = () => (
  <div className="search_add">
    {/* Title */}
    <div className="search_add_intro">
      <p className="search_add_title">Ajouter un bookmark</p>
    </div>
    <SearchAddForm />
  </div>
);

/**
 * Export
 */
export default FormAdd;
