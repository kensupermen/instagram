import * as React from "react";
import axios from 'axios';
import Comments from "./comments"
import Like from "./like"

const prefixURL = '/api/v1/'

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let URL = prefixURL + 'posts';
    axios.get(URL)
      .then((response) => {
        this.setState({
          posts: response.data.posts
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
        <div className="row">
          {
            this.state.posts.map((post) => {
              return (
                <div key={post.id} className="post" >
                  <div className="avatar"> <img src="/boy.png" alt="avatar" /> </div>
                  <div className="username">{post.first_name + " " + post.last_name} </div>
                  <div className="caption">{post.caption}</div>
                  <div className="image"> <img src= { post.image } alt="image" /> </div>
                  <Like post={post} />

                  <Comments post={post} />
                </div>
              )
            })
          }
        </div>
    );
  }
}

export default Posts;
