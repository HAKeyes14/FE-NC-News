import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props;
    getCommentsByArticleId(id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    const { comments, isLoading } = this.state;

    return (
      <div>
        <CommentAdder id={this.props.id} addComment={this.addComment} />
        <h4>Comments:</h4>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {comments.map(comment => (
              <CommentCard comment={comment} key={comment.comment_id} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CommentsList;
