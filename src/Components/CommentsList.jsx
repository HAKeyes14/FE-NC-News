import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import CommentSorter from "./CommentSorter";
import loading from "../assets/loading.gif";
import ErrorPage from "./ErrorPage";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    sort_by: "created_at",
    showSuccess: false,
    showErr: false,
    err: null
  };

  componentDidMount() {
    const { id } = this.props;
    getCommentsByArticleId(id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(error => {
        this.setState({
          err: { status: error.response.status, msg: error.response.data.msg }
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props;
    const { sort_by } = this.state;
    if (prevState.sort_by !== sort_by) {
      getCommentsByArticleId(id, sort_by)
        .then(comments => {
          this.setState({ comments, isLoading: false });
        })
        .catch(error => {
          this.setState({
            err: { status: error.response.status, msg: error.response.data.msg }
          });
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
    }, 4000);
  };

  sortComments = sort_by => {
    this.setState({ sort_by });
  };

  toggleShowErr = () => {
    this.setState({ showErr: true }, () => {
      setTimeout(() => {
        this.setState({ showErr: false });
      }, 4000);
    });
  };

  render() {
    const { comments, isLoading, showSuccess, showErr, err } = this.state;
    const { loggedInUser, id } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <section className="commentsDisplay">
        <CommentAdder
          id={id}
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
                toggleShowErr={this.toggleShowErr}
              />
            ))}
          </ul>
        )}
        {showSuccess && <p className="successMsg">Comment deleted</p>}
        {showErr && (
          <p className="errorMsg">Comment could not be deleted at this time.</p>
        )}
      </section>
    );
  }
}

export default CommentsList;
