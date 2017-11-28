import * as React from "react";
import axios from 'axios';

const prefixURL = '/api/v1/'
const domain = 'http://' + window.location.host

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let URL = prefixURL + 'posts/list';
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
      <div className="container">
        <div className="page">
          <div className="row">
            {
              this.state.posts.map((post) => {
                return (
                  <div key={post.id} className="post" >
                    <div className="username">{post.first_name + " " + post.last_name}</div>
                    <div className="image">
                      <img src= { domain + post.image } alt="" />
                    </div>
                    <div className="caption">{post.caption}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
