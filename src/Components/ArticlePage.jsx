import React, { Component } from "react";
import ArticleDisplayer from "./ArticleDisplayer";
import CommentsList from "./CommentsList";
import { getArticleById } from "../api";
import ErrorPage from "./ErrorPage";
import loading from "../assets/loading.gif";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    showComments: false,
    err: null,
    showError: false
  };

  componentDidMount() {
    const { id } = this.props;
    getArticleById(id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        this.setState({
          err: { status: error.response.status, msg: error.response.data.msg }
        });
      });
  }

  handleClick = () => {
    this.setState(currentState => {
      return { showComments: !currentState.showComments };
    });
  };

  toggleShowErr = () => {
    this.setState({ showError: true }, () => {
      setTimeout(() => {
        this.setState({ showError: false });
      }, 4000);
    });
  };

  render() {
    const { article, isLoading, showComments, showError, err } = this.state;
    const { loggedInUser } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <main>
        {isLoading ? (
          <img src={loading} alt="Loading..." height="80" />
        ) : (
          <>
            <ArticleDisplayer
              article={article}
              handleClick={this.handleClick}
              showComments={this.showComments}
              loggedInUser={loggedInUser}
              toggleShowErr={this.toggleShowErr}
            />
            {showError && (
              <p className="errorMsg">Could not delete article at this time.</p>
            )}
            {showComments && (
              <CommentsList
                path="/comments"
                id={article.article_id}
                loggedInUser={loggedInUser}
              />
            )}
          </>
        )}
      </main>
    );
  }
}

export default ArticlePage;
