import React, { Component } from "react";
import { postComment } from "../api";
import { addComment } from "@babel/types";

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
      <form onSubmit={this.handleSubmit}>
        <label>
          Add Comment:
          <textarea
            rows={10}
            cols={80}
            placeholder="Write new comment here"
            maxLength={2000}
            onChange={this.handleChange}
            value={this.state.input}
          />
        </label>
        <button>Post</button>
      </form>
    );
  }
}

export default CommentAdder;
