/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import moment from 'moment';

/**
 * Local import
 */
// Composants
import ProfileForm from './ProfileForm';

// Styles et assets
/**
 * Code
 */
class ProfileEdit extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    clickProfileEdit: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
  }

  clickOnTools = () => {
    const { clickProfileEdit } = this.props;
    clickProfileEdit();
  }

  render() {
    const { user, editUser } = this.props;
    const dateBirthday = moment(user.birthday).format('YYYY-MM-DD');
    return (
      <div className="profile-edit">
        <MdClose className="profile-edit-tools" onClick={this.clickOnTools} />
        <ProfileForm
          onSubmit={editUser}
          initialValues={{
            id: user.id,
            username: user.username,
            firstname: user.first_name,
            lastname: user.last_name,
            email: user.email,
            birthday: dateBirthday,
            github: user.pseudo_github,
            zip: user.zip,
          }}
        />
      </div>
    );
  }
}

/**
 * Export
 */
export default ProfileEdit;
