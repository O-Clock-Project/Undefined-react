/**
 * Import
 */
import React from 'react';
import {
  FaSchool,
  FaGooglePlay,
  FaArchive,
  FaGoogleDrive,
  FaGithub,
  FaSlackHash,
} from 'react-icons/fa';

/**
 * Local import
 */
// Composants


// Styles et assets
import './links.sass';

/**
 * Code
 */
const Links = () => (
  <div id="links">
    <div className="link">
      <div className="link_icon"><FaSchool /></div>
      <div className="link_url">
        <a
          href="https://cockpit.oclock.io/login"
          target="_blank"
          rel="noopener noreferrer"
        >Cockpit
        </a>
      </div>
    </div>
    <div className="link">
      <div className="link_icon"><FaGooglePlay /></div>
      <div className="link_url">
        <a
          href="https://drive.google.com/drive/folders/1-aRtfhJ8lrzhUJQxDa6Jyp31JbEaWsKz"
          target="_blank"
          rel="noopener noreferrer"
        >Replays
        </a>
      </div>
    </div>
    <div className="link">
      <div className="link_icon"><FaArchive /></div>
      <div className="link_url">
        <a
          href="https://github.com/O-clock-Alumni/fiches-recap"
          target="_blank"
          rel="noopener noreferrer"
        >Fiches récap
        </a>
      </div>
    </div>
    <div className="link">
      <div className="link_icon"><FaGoogleDrive /></div>
      <div className="link_url">
        <a
          href="https://drive.google.com/drive/folders/1-OZEtWXMGgaOaFmSeaJAbatRok_UT2DJ"
          target="_blank"
          rel="noopener noreferrer"
        >Drive
        </a>
      </div>
    </div>
    <div className="link">
      <div className="link_icon"><FaGithub /></div>
      <div className="link_url">
        <a
          href="https://github.com/orgs/O-clock-Invaders/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub
        </a>
      </div>
    </div>
    <div className="link">
      <div className="link_icon"><FaSlackHash /></div>
      <div className="link_url">
        <a
          href="https://oclock-invaders.slack.com"
          target="_blank"
          rel="noopener noreferrer"
        >Slack
        </a>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Links;
