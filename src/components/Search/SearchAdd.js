/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
const FormAdd = ({ addBookmark }) => (
  <div className="search_add">
    {/* Title */}
    <div className="search_add_intro">
      <p className="search_add_title">Ajouter un bookmark</p>
    </div>
    <SearchAddForm onSubmit={addBookmark} />
  </div>
);

FormAdd.propTypes = {
  addBookmark: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default FormAdd;
