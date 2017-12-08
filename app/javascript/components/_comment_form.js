import * as React from "react";
import axios from 'axios';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleSubmit(e) {
    if (e.key === 'Enter') {
      let commentFormData = this.refs.txtMessage.value
      this.refs.txtMessage.value = "";
      this.props.onCommentSubmit(commentFormData)
    }
  }

  render() {
    return  (
              <div className="form-group" >
                <input type="text" className='form-control' placeholder="Write a comment..." ref="txtMessage"  onKeyPress={(e) => this._handleSubmit(e)}/>
              </div>
            )
  }
}

export default CommentForm;
