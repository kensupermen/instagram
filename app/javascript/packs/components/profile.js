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
    let URL = prefixURL + 'users/1';
    axios.get(URL)
      .then((response) => {
        console.log(response.data);

        this.setState({
          user: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="profile">
          <div className="avatar"><img src="/boy.png" alt="avatar" /></div>
          <div className="user-info">
            <span>
              {this.state.user.first_name + " " +this.state.user.last_name}
            </span>
          </div>
        </div>
        <div className="images">
        </div>
      </div>
    )
  }
}

export default Profile;
