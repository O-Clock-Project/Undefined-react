/**
 * Import
 */
import React from 'react';
import {
  FaFilm,
  FaHeadphones,
  FaFileAlt,
} from 'react-icons/fa';

/**
 * Local import
 */
// Composants


// Styles et assets
import './ressource.sass';

/**
 * Code
 */
const Ressource = () => (
  <div id="ressource">
    {/* Ressource title */}
    <h1 id="ressource_title">Un bookmark</h1>

    {/* Ressource infos */}
    <p id="ressource_infos">
      <span id="ressource_author">Authors - </span>
      <span id="ressource_published">28 avril 2018 - </span>
      <span id="ressource_proposed">Julien</span>
    </p>

    {/* Ressource presentation */}
    <p id="ressource_presentation">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis quidem, porro quaerat beatae cumque asperiores totam fuga atque quisquam ipsum facere error voluptatibus nihil iste nobis, ex ut, itaque temporibus at sequi. Culpa corrupti pariatur architecto officiis repellendus aut, facere quam magni, maxime adipisci soluta? Pariatur sint blanditiis fuga animi voluptatem at voluptate quisquam quod, eveniet sed illum sunt nam sequi, eaque, quo accusamus consequuntur eos dolorum! Tenetur aspernatur consectetur tempora aliquid minima fuga ad rerum quaerat harum, unde odio sed expedita ab autem itaque est doloremque optio, quod omnis! Exercitationem, et? Maiores explicabo obcaecati quaerat vel est vero praesentium natus ex minus! Atque maiores repudiandae eveniet. Quam in sit maiores. Quos dolor beatae, quas maxime non delectus. Iste deleniti maxime repellendus labore? Adipisci inventore ab voluptatem repellendus pariatur omnis excepturi sequi iste minima quia minus facere distinctio error.
    </p>

    {/* Ressources tags */}
    <div id="ressource_tags">
      <div className="ressource_tags_ligne">
        <div className="ressource_tag">Tag1</div>
        <div className="ressource_tag">Tag2</div>
        <div className="ressource_tag">Tag3</div>
      </div>
      <div className="ressource_tags_ligne">
        <div className="ressource_tag">Tag4</div>
        <div className="ressource_tag">Tag5</div>
        <div className="ressource_tag">Tag6</div>
      </div>
    </div>

    {/* Ressources buttons */}

    {/* Ressource links and preview */}
    <div id="ressource_preview">
      <div id="ressource_preview_section">
        <p id="ressource_preview_title">Filtrer les bookmarks</p>
        <div id="ressource_preview_icon"><FaFilm /></div>
      </div>

      <div id="ressource_link">
        <p>Lien vers le bookmark</p>
        <a href="#">URL du bookmark</a>
      </div>
      <div id="ressource_preview">
        Je suis la preview du bookmark
      </div>
    </div>

    {/* Return */}
    <button type="button" id="ressource_return">Retour</button>

  </div>
);

/**
 * Export
 */
export default Ressource;
