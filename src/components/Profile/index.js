/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import ProfileView from 'src/containers/Profile/ProfileView';
import ProfileEdit from 'src/containers/Profile/ProfileEdit';
import ProfileNav from 'src/containers/Profile/ProfileNav';

// Styles et assets
import './profile.sass';

/**
 * Code
 */
class Profile extends React.Component {
  static propTypes = {
    idView: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    edit: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    loadUserView: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { idView, loadUserView } = this.props;
    loadUserView(idView);
  }

  componentDidUpdate(prevProps) {
    const { idView, loadUserView } = this.props;
    if (idView !== prevProps.idView) {
      loadUserView(idView);
    }
  }

  render() {
    const { user, edit, loaded } = this.props;
    return (
      <div id="profile">
        {loaded && <h1 id="profile_title">{user.username}</h1>}
        {!edit && loaded && <ProfileView />}
        {edit && loaded && <ProfileEdit />}
        {loaded && <ProfileNav />}
      </div>
    );
  }
}

/**
 * Export
 */
export default Profile;
