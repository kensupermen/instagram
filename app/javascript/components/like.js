import * as React from "react";
import axios from 'axios';

const LIKE = 'LIKE';
const LIKED = 'LIKED';
const prefixURL = '/api/v1/'

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes_size: props.post.likes_size,
      like_status: this._likeStatus(props.post.liked),
      like_class: this._likeClassName(props.post.liked)
    }
  }

  _likeStatus(status) {
    return status === true ? LIKED : LIKE
  }

  _likeClassName(status) {
    return status === true ? "btn btn-primary btn-sm" : "btn btn-outline-primary btn-sm"
  }

  _handleOnLike() {
    let likeStatus = this.state.like_status;
    let URL = prefixURL + 'posts/'+ this.props.post.id + '/like';

    if (likeStatus === LIKE ) {
      axios.post(URL)
        .then((response) => {
          this.setState({
            likes_size: this.props.post.likes_size + 1,
            like_status: LIKED,
            like_class: 'btn btn-primary btn-sm'
          })
        })
    }
  }

  render() {
    return <div>
              <hr />
              <button className={this.state.like_class} type="submit" onClick={() => this._handleOnLike()}>
                <i className="fa fa-heart-o" aria-hidden="true"></i> &nbsp;
                {this.state.like_status}
              </button>
              <hr />
              <div className="liked">{this.state.likes_size} &nbsp;
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </div>
              <hr />
          </div>
  }
}

export default Like;
