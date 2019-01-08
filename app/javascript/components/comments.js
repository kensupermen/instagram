import * as React from 'react';
import axios from 'axios';
import Api from './api';

import CommentForm from './_comment_form';
import CommentList from './_comment_list';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.post.comments,
    };
  }

  loadComments() {
    let URL = Api.getPost(this.props.post.id);

    axios.get(URL).then(response => {
      this.setState({
        comments: response.data.comments,
      });
    });
  }

  handleCommentSubmit(message) {
    let url = Api.createComment(this.props.post.id);
    let params = { comment: { message: message } };
    axios.post(url, params).then(response => {
      this.loadComments();
    });
  }

  render() {
    return (
      <div>
        <CommentForm
          onCommentSubmit={message => this.handleCommentSubmit(message)}
        />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default Comments;
