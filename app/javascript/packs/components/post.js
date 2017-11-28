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

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      let url = prefixURL + 'comments/create'
      let params = {}
      axios.post(url, params)
        .then((response) => {
          console.log(response)
        })
    }
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
                    <div className="caption">{post.caption}</div>
                    <div className="image">
                      <img src= { domain + post.image } alt="" />
                    </div>
                    <hr />
                    <div className="form-group">
                      <input type="text" className='form-control' placeholder="Write a comment..." onKeyPress={this._handleKeyPress}/>
                      <div className="comments">
                        {console.log(post.comments)}
                        {
                          post.comments.map((comment) => {
                            return (<div key={comment.id} className="comment">
                              <div className="row">
                                <div className="commenter">kensupermen</div>
                                <div className="message">
                                  {comment.message}
                                </div>
                              </div>
                            </div>)
                          })
                        }
                      </div>
                    </div>
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
