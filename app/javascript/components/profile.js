import * as React from "react";
import axios from 'axios';

const prefixURL = '/api/v1/'

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  _getUsername() {
    let user = this.props.user
    if (user.first_name != null && user.last_name != null)
      return user.first_name + " " + user.last_name

    return "";
  }

  render() {
    return (
      <div>
        <div className="profile">
          <div className="avatar"><img src="/boy.png" alt="avatar" /></div>
          <div className="user-info">
            <span> { this._getUsername() } </span>
          </div>
        </div>
        <div className="images">
        </div>
      </div>
    )
  }
}

export default Profile;
