import React, { Component } from "react";
import { postComment } from "../api";

class CommentAdder extends Component {
  state = {
    input: "",
    isLoading: false,
    showError: false
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, loggedInUser, addComment } = this.props;
    const { input } = this.state;
    postComment(id, input, loggedInUser)
      .then(postedComment => {
        addComment(postedComment);
      })
      .catch(
        error => {
          this.setState({
            showError: true
          });
        },
        () => {
          setTimeout(() => {
            this.setState({ showError: false });
          }, 4000);
        }
      );
    this.setState({ input: "" });
  };

  render() {
    const { input, showError } = this.state;

    return (
      <>
        <form className="commentAdder" onSubmit={this.handleSubmit}>
          <label>
            Add Comment:
            <textarea
              className="textbox"
              placeholder="Write new comment here"
              maxLength={2000}
              required
              onChange={this.handleChange}
              value={input}
            />
          </label>
          <button type="submit" className="postButton">
            Post
          </button>
        </form>
        {showError && (
          <p className="errorMsg">Could not post comment at this time.</p>
        )}
      </>
    );
  }
}

export default CommentAdder;
