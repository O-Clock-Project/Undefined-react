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
import ProfileEditLine from 'src/containers/ProfileEditLine';

// Styles et assets
import 'react-datepicker/dist/react-datepicker.css';

/**
 * Code
 */
class ProfileEdit extends React.Component {
  static propTypes = {
    clickProfileEdit: PropTypes.func.isRequired,
    changeBirthday: PropTypes.func.isRequired,
    inputForm: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const { inputForm } = this.props;
    const date = inputForm.birthday !== '' ? moment(inputForm.birthday, 'YYYY-MM-DD') : moment();
    this.state = {
      startDate: date,
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  validateEdition = () => {
    const { clickProfileEdit } = this.props;
    clickProfileEdit();
  }

  handleChangeDate = (date) => {
    const formatDate = date.format('YYYY-MM-DD');
    const { changeBirthday } = this.props;
    this.setState({
      startDate: date,
    });
    changeBirthday(formatDate);
  }

  render() {
    const { startDate } = this.state;
    const { inputForm } = this.props;
    return (
      <div className="profile-edit">
        <form className="profile-edit-form">
          <ProfileEditLine type="text" name="firstname" label="Prénom" value={inputForm.input_firstname} />
          <ProfileEditLine type="text" name="lastname" label="Nom" value={inputForm.input_lastname} />
          <ProfileEditLine type="email" name="email" label="Email" value={inputForm.input_email} />
          <ProfileEditLine type="password" name="new_password" label="Nouveau mot de passe" value={inputForm.input_new_password} />
          <ProfileEditLine type="password" name="confirm_new_password" label="Confirmation du nouveau mot de passe" value={inputForm.input_confirm_new_password} />
          <ProfileEditLine type="text" name="pseudo_github" label="Pseudo GitHub" value={inputForm.input_pseudo_github} />
          <ProfileEditLine type="text" name="zip" label="Code postal" value={inputForm.input_zip} />
          <div className="profile-edit-form-line profile-edit-form-birthday">
            <p className="profile-edit-form-label">
              Date de naissance :
            </p>
            <DatePicker
              selected={startDate}
              onChange={this.handleChangeDate}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="DD-MM-YYYY"
              className="profile-edit-form-input"
            />
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
