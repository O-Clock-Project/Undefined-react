/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants


// Styles et assets

/**
 * Code
 */
const ProfileEditLine = ({
  type, name, label, value,
}) => (
  <div className="profile-edit-form-line">
    <label htmlFor={name} className="profile-edit-form-label">
      {label} :
      <input type={type} name={name} id={name} value={value} className="profile-edit-form-input" />
    </label>
  </div>
);

ProfileEditLine.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default ProfileEditLine;
