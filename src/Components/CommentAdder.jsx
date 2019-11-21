import React, { Component } from "react";
import { postComment } from "../api";

class CommentAdder extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id } = this.props;
    const { input } = this.state;
    postComment(id, input).then(postedComment => {
      this.props.addComment(postedComment);
    });
    this.setState({ input: "" });
  };

  render() {
    return (
      <form className="commentAdder" onSubmit={this.handleSubmit}>
        <label>
          Add Comment:
          <textarea
            className="textbox"
            placeholder="Write new comment here"
            maxLength={2000}
            required
            onChange={this.handleChange}
            value={this.state.input}
          />
        </label>
        <button className="postButton">Post</button>
      </form>
    );
  }
}

export default CommentAdder;
