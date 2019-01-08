import * as React from 'react';
import axios from 'axios';
import Masonry from 'masonry-layout';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  _getUsername() {
    let user = this.props.user;
    if (user.first_name != null && user.last_name != null)
      return user.first_name + ' ' + user.last_name;

    return '';
  }

  componentDidMount() {
    $(function() {
      imagesLoaded('.grid', function() {
        // images have loaded
        var elem = document.querySelector('.grid');
        var msnry = new Masonry(elem, {
          // options
          itemSelector: '.grid-item',
          columnWidth: 80,
          gutter: 20,
          fitWidth: true,
        });
      });
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="avatar">
          <img src="/boy.png" alt="avatar" className="img-circle" />
        </div>
        <div className="user-info">
          <span> {this._getUsername()} </span>
        </div>

        <div className="images">
          <div className="grid">
            {this.props.images.map(image => {
              return (
                <div key={image} className="grid-item">
                  <img src={image} alt={image} className="img-responsive" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
