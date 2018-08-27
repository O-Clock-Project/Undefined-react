/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
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

/**
 * Code
 */
const PromoLink = ({ name, url, icon }) => (
  <div className="link">
    <div className="link_url">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon === 'FaSchool' && <div className="link_icon"><FaSchool /></div>}
        {icon === 'FaGooglePlay' && <div className="link_icon"><FaGooglePlay /></div>}
        {icon === 'FaArchive' && <div className="link_icon"><FaArchive /></div>}
        {icon === 'FaGoogleDrive' && <div className="link_icon"><FaGoogleDrive /></div>}
        {icon === 'FaGithub' && <div className="link_icon"><FaGithub /></div>}
        {icon === 'FaSlackHash' && <div className="link_icon"><FaSlackHash /></div>}
        <span>{name}</span>
      </a>
    </div>
  </div>
);

PromoLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default PromoLink;
