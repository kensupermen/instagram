import * as React from "react";
import axios from 'axios';

const prefixURL = '/api/v1/'

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: []
    }
  }

  componentDidMount() {
    let URL = prefixURL + window.location.pathname;
    axios.get(URL)
      .then((response) => {

        this.setState({
          user: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _getUsername() {
    let user = this.state.user
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
