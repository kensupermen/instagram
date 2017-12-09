import * as React from "react";
import axios from 'axios';

import Comments from "./comments"
import Like from "./like"
import Api from './api'

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    let URL = Api.getPosts()
    axios.get(URL)
      .then((response) => {
        this.setState({
          posts: response.data.posts
        })
      });
  }

  render() {
    return (
        <div className="row" data-turbolinks="false">
          {
            this.state.posts.map((post) => {
              return (
                <div key={post.id} className="post" >
                  <div className="avatar"> <img src="/boy.png" alt="avatar" /> </div>
                  <div className="username">
                    <a href={"users/" + post.user.id}>
                      {post.first_name + " " + post.last_name}
                    </a>
                  </div>
                  <div className="caption">{post.caption}</div>
                  <div className="image"> <img src= { post.image } alt="image" /> </div>
                  <Like post={post} />

                  <Comments key={post.id} post={post} />
                </div>
              )
            })
          }
        </div>
    );
  }
}

export default Posts;
