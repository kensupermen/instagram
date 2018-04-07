import * as React from 'react';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  _getUsername(comment) {
    return comment.user.first_name + ' ' + comment.user.last_name
  }

  render() {
    return (
          <div className="comments">
            {
              this.props.comments.map((comment) => {
                return (
                  <div key={comment.id} className=" row comment">
                    <div className="commenter">{ this._getUsername(comment) }</div>
                    <div className="message"> {comment.message} </div>
                  </div>
                )
              })
            }
          </div>
    )
  }
}

export default CommentList;
