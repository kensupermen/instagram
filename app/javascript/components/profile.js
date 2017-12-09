import * as React from "react";
import axios from 'axios';
import masonry from 'masonry-layout';

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
        <div className="profile">
          <div className="avatar"><img src="/boy.png" alt="avatar" /></div>
          <div className="user-info">
            <span> { this._getUsername() } </span>
          </div>

          <div className="images">
            <div className="grid js-masonry" data-masonry-options='{ "columnWidth": 160, "itemSelector": ".grid-item" }'>
              {
                this.props.images.map((image) => {
                  return (
                    <div key={image} className="grid-item">
                      <img src={image} alt={image} />
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>
    )
  }
}

export default Profile;
