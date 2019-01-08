import * as React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleSubmit(e) {
    e.preventDefault();
    let commentFormData = this.refs.txtMessage.value;
    this.refs.txtMessage.value = '';

    this.props.onCommentSubmit(commentFormData);
  }

  render() {
    return (
      <div className="form-group">
        <form action="" method="post" onSubmit={e => this._handleSubmit(e)}>
          <input
            type="text"
            className="form-control"
            placeholder="Write a comment..."
            ref="txtMessage"
          />
        </form>
      </div>
    );
  }
}

export default CommentForm;
