/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Bookmark from 'src/components/Bookmark';

// Styles et assets
import './bookmarks.sass';

/**
 * Code
 */
const Bookmarks = () => (
  <div id="bookmarks">
    <form id="bookmarks_form">
      <p id="bookmarks_title">Trier les bookmarks</p>
      <select name="select" id="bookmarks_select">
        <option value="last">Lasts</option>
        <option value="news">News</option>
      </select>
    </form>
    <div id="bookmarks_list">
      <Bookmark />
      <Bookmark />
      <Bookmark />
      <Bookmark />
      <Bookmark />
      <Bookmark />
      <Bookmark />
      <Bookmark />
      <Bookmark />
    </div>
  </div>
);

/**
 * Export
 */
export default Bookmarks;
