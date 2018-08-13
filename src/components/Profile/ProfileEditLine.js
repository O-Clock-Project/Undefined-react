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
class ProfileEditLine extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    changeInputValue: PropTypes.func.isRequired,
  }

  handleChangeInput = (evt) => {
    const { changeInputValue } = this.props;
    const { name, value } = evt.target;
    changeInputValue(name, value);
  }

  render() {
    const {
      type, name, label, value,
    } = this.props;
    return (
      <div className="profile-edit-form-line">
        <label htmlFor={name} className="profile-edit-form-label">
          {label} :
          <input onChange={this.handleChangeInput} type={type} name={name} id={name} value={value} className="profile-edit-form-input" />
        </label>
      </div>
    );
  }
}

/**
 * Export
 */
export default ProfileEditLine;
