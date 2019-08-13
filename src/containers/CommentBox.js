import React, {Component} from 'react';
import CommentList from '../components/CommentList.js';
import CommentForm from '../components/CommentForm.js';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {
          id: 1,
          author: "Louise",
          text: "I love JS more every day"
        },
        {
          id: 2,
          author: "Harrison",
          text: "Just wait until we add the form! It's gonna be so good"
        }
      ]
    };

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

  }

  handleCommentSubmit(submittedComment) {
    submittedComment.id = Date.now();
    const updatedComments = [...this.state.data, submittedComment]; //spread operator. Push changes existing array but spread operator will create a new array!
    this.setState({data: updatedComments});
  }

  render() {
    return(
    <div className="comment-box">
      <h2>Add a Comment</h2>
      <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      <h2>Comments</h2>
      <CommentList data={this.state.data} />
    </div>
    )
  }
}

export default CommentBox;
