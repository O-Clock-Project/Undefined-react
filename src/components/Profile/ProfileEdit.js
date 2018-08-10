/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

/**
 * Local import
 */
// Composants
import ProfileEditLine from './ProfileEditLine';

// Styles et assets
import 'react-datepicker/dist/react-datepicker.css';

/**
 * Code
 */
class ProfileEdit extends React.Component {
  static propTypes = {
    clickProfileEdit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateEdition = () => {
    const { clickProfileEdit } = this.props;
    clickProfileEdit();
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const { startDate } = this.state;
    return (
      <div className="profile-edit">
        <form className="profile-edit-form">
          <ProfileEditLine type="text" name="firstname" label="Prénom" value="Julien" />
          <ProfileEditLine type="text" name="lastname" label="Nom" value="Berrebi" />
          <ProfileEditLine type="email" name="email" label="Email" value="juju.truc@gmail.com" />
          <ProfileEditLine type="password" name="new_password" label="Nouveau mot de passe" value="" />
          <ProfileEditLine type="password" name="confirm_new_password" label="Confirmation du nouveau mot de passe" value="" />
          <ProfileEditLine type="text" name="pseudo_github" label="Pseudo GitHub" value="NayuSaionji" />
          <div className="profile-edit-form-line">
            <p className="profile-edit-form-label profile-edit-form-birthday">
              Date de naissance :
              <DatePicker
                dateFormat="DD/MM/YYYY"
                selected={startDate}
                onChange={this.handleChange}
                className="profile-edit-form-input"
              />
            </p>
          </div>
          

          <div className="profile-edit-validate">
            <button type="submit" className="profile-edit-btn" onClick={this.validateEdition}>Valider</button>
          </div>
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
export default ProfileEdit;
