import * as React from "react";
import axios from 'axios';

const prefixURL = '/api/v1/'

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.post.comments
    }
  }

  loadComments() {
    let URL = prefixURL + 'posts/'+ this.props.post.id;
    axios.get(URL)
      .then((response) => {
        this.refs.txtMessage.value = "";
        this.setState({
          comments: response.data.comments
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      let url = prefixURL + 'posts/' + this.props.post.id + '/comments/create'
      let params = { 'comment':
                        { 'message': this.refs.txtMessage.value }
                   }
      axios.post(url, params)
        .then((response) => {
          this.loadComments()
        })
    }
  }

  _getUsername(comment) {
    return comment.username.first_name + " " + comment.username.last_name
  }

  render() {
    return <div className="form-group">
             <input type="text" className='form-control' placeholder="Write a comment..." ref="txtMessage"  onKeyPress={(e) => this._handleKeyPress(e)}/>
              <div className="comments">
                {
                  this.state.comments.map((comment) => {
                    return (<div key={comment.id} className="comment">
                      <div className="row">
                        <div className="commenter">{ this._getUsername(comment) }</div>
                        <div className="message">
                          {comment.message}
                        </div>
                      </div>
                    </div>)
                  })
                }
              </div>
            </div>
  }
}

export default Comments;
