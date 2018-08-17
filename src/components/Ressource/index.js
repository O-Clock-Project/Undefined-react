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
// Assets
import preview from 'src/assets/images/preview.png';
// Composants


// Styles et assets
import './ressource.sass';

/**
 * Code
 */
const Ressource = () => (
  <div id="ressource">
    {/* Ressource title */}
    <h1 id="ressource_title">Le titre du Bookmark</h1>

    {/* Ressource infos */}
    <p id="ressource_infos">
      <span id="ressource_author">Authors - </span>
      <span id="ressource_published">28 avril 2018 - </span>
      <span id="ressource_proposed">Julien</span>
    </p>

    {/* Ressource presentation */}
    <p id="ressource_presentation">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis quidem, porro quaerat beatae cumque asperiores totam fuga atque quisquam ipsum facere error voluptatibus nihil iste nobis, ex ut, itaque temporibus at sequi. Culpa corrupti pariatur architecto officiis repellendus aut, facere quam magni, maxime adipisci soluta? Pariatur sint blanditiis fuga animi voluptatem at voluptate quisquam quod, eveniet sed illum sunt nam sequi, eaque, quo accusamus consequuntur eos dolorum! Tenetur aspernatur consectetur tempora aliquid minima fuga ad rerum quaerat harum, unde odio sed expedita ab autem itaque est doloremque optio.
    </p>

    {/* Ressources tags */}
    <div id="ressource_tags">
      <div className="ressource_tags_line">
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">Audio</div>
          <div className="tag_right" />
        </div>
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">Français</div>
          <div className="tag_right" />
        </div>
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">Progresser</div>
          <div className="tag_right" />
        </div>
      </div>
      <div className="ressource_tags_line">
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">Bootstrap</div>
          <div className="tag_right" />
        </div>
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">Javascript</div>
          <div className="tag_right" />
        </div>
        <div className="ressource_tags_tag">
          <div className="tag_left" />
          <div className="tag_content">Librairie de ouf</div>
          <div className="tag_right" />
        </div>
      </div>
    </div>

    {/* Ressources buttons */}

    {/* Ressource links and preview */}
    <div id="ressource_preview">
      <div id="ressource_preview_section">
        <p id="ressource_preview_title">Previsualisation</p>
        <div><FaFilm id="ressource_preview_icon" /></div>
      </div>

      <div id="ressource_link">
        <p>Lien vers le bookmark :</p>
        <a href="#">URL du bookmark</a>
      </div>
      <div id="ressource_capture">
        <img id="ressource_image" src={preview} alt="preview" />
      </div>
    </div>

    {/* Return */}
    <button type="button" className="search_button">Retour</button>

  </div>
);

/**
 * Export
 */
export default Ressource;
