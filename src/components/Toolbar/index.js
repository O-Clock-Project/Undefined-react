/**
 * Import
 */
import React from 'react';
import { FaSortUp, FaSortDown, FaPencilAlt } from 'react-icons/fa';
import {
  IoIosStar,
  IoIosStarOutline,
  IoMdCheckbox,
  IoMdCheckboxOutline,
} from 'react-icons/io';

/**
 * Local import
 */
// Composants

// Styles et assets
import './toolbar.sass';

/**
 * Code
 */
const Toolbar = () => (
  <div id="toolbar">

    {/* Vote */}
    <div id="toolbar_vote">
      <div id="toolbar_vote_up">
        <FaSortUp />
      </div>
      <div id="toolbar_vote_content">
        52
      </div>
      <div id="toolbar_vote_down">
        <FaSortDown />
      </div>
    </div>

    {/* Favoried */}
    <div id="toolbar_fav">
      <div id="toolbar_fav_icon">
        <IoIosStarOutline />
      </div>
    </div>

    {/* Edit */}
    <div id="toolbar_edit">
      <div id="toolbar_edit_icon">
        <FaPencilAlt />
      </div>
      <div id="toolbar_edit_content">
        éditer
      </div>
    </div>

    {/* Certified */}
    <div id="toolbar_certified">
      <div id="toolbar_certified_icon">
        <IoMdCheckboxOutline />
      </div>
      <div id="toolbar_certified_content">
        certifier
      </div>
    </div>

  </div>
);

/**
 * Export
 */
export default Toolbar;
