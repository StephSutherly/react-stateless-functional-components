import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      text: ""
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // prevents form refreshing as per JS norm
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    // trim gets rid of any unecessary white space
    if (!text || !author){
      return; //jumps out of the function
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: "", text: ""}); //resets form to empty/clear

  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}>
        </input>
        <input
          type="text"
          placeholder="Comment here..."
          value={this.state.text}
          onChange={this.handleTextChange}>
        </input>
        <input type="submit" value="Post Comment"></input>
      </form>
    )
  }
}

export default CommentForm;
