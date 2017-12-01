import * as React from "react";
import axios from 'axios';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: props.post
    }
  }

  render() {
    return <div>
              <hr />
              <button className="btn btn-outline-primary btn-sm" type="submit">
                <i className="fa fa-heart-o" aria-hidden="true"></i> &nbsp;
                LIKE
              </button>
              <hr />
              <div className="liked">{this.props.post.likes_size} &nbsp;
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </div>
              <hr />
          </div>
  }
}

export default Like;
