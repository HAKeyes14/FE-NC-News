import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import CommentSorter from "./CommentSorter";
import loading from "../assets/loading.gif";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    sort_by: "created_at",
    showSuccess: false
  };

  componentDidMount() {
    const { id } = this.props;
    getCommentsByArticleId(id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props;
    const { sort_by } = this.state;
    if (prevState.sort_by !== sort_by) {
      getCommentsByArticleId(id, sort_by).then(comments => {
        this.setState({ comments, isLoading: false });
      });
    }
  }

  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  removeComment = comment_id => {
    this.setState(currentState => {
      const filteredComments = currentState.comments.filter(
        comment => comment.comment_id !== comment_id
      );
      return { comments: filteredComments, showSuccess: true };
    });
    setTimeout(() => {
      this.setState({ showSuccess: false });
    }, 3000);
  };

  sortComments = sort_by => {
    this.setState({ sort_by });
  };

  render() {
    const { comments, isLoading, showSuccess } = this.state;
    const { loggedInUser } = this.props;
    return (
      <section className="commentsDisplay">
        <CommentAdder
          id={this.props.id}
          addComment={this.addComment}
          loggedInUser={loggedInUser}
        />
        <CommentSorter sortComments={this.sortComments} />
        {isLoading ? (
          <img src={loading} alt="Loading..." height="80" />
        ) : (
          <ul className="commentList">
            {comments.map(comment => (
              <CommentCard
                comment={comment}
                key={comment.comment_id}
                removeComment={this.removeComment}
                loggedInUser={loggedInUser}
              />
            ))}
          </ul>
        )}
        {showSuccess && <p className="successMsg">Comment deleted</p>}
      </section>
    );
  }
}

export default CommentsList;
