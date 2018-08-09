/**
 * Import
 */
import React from 'react';
import { FaFilm } from 'react-icons/fa';

/**
 * Local import
 */
// Composants


// Styles et assets
import './bookmark.sass';
import certified from 'src/assets/images/certified.svg';

/**
 * Code
 */
const Bookmark = () => (
  <div className="bookmark">
    <div>
      {/* Bookmark identity */}
      <div className="bookmark_identity">
        <a href="#" className="bookmark_identity_support"><FaFilm /> </a>
        <a href="#" className="bookmark_identity_title">React.js, la révolution par le fond et le vomi, dur dur</a>
      </div>
      {/* Bookmark infos */}
      <div className="bookmark_infos">
        <span className="bookmark_infos_date"> 08.08.2018 -</span>
        <span className="bookmark_infos_author"> Nicolas Ouissiaen -</span>
        <span className="bookmark_infos_proposed"> Proposé par <a href="#"> Julien</a></span>
      </div>
      {/* Bookmark tags */}
      <ul className="bookmark_tags">
        <li><a href="#" className="bookmark_tags_tag">HTML</a></li>
        <li><a href="#" className="bookmark_tags_tag">CSS</a></li>
        <li><a href="#" className="bookmark_tags_tag">JavaScript</a></li>
        <li><a href="#" className="bookmark_tags_tag">OuiOui</a></li>
      </ul>
    </div>
    <div>
      {/* Bookmark highlight */}
      <div className="bookmark_highlight">
        {/* Certificat */}
        <div className="bookmark_highlight_certificat"><img src={certified} alt="certified" /></div>
        {/* Votes */}
        <div className="bookmark_highlight_voted">
          <div className="voted_note">5</div>
          <div className="voted_title">votes</div>
        </div>
        {/* Favored */}
        <div className="bookmark_highlight_favored">
          <div className="favored_note">55</div>
          <div className="favored_title">favoris</div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Bookmark;
