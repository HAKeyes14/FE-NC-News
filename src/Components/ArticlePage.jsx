import React, { Component } from "react";
import ArticleDisplayer from "./ArticleDisplayer";
import CommentsList from "./CommentsList";
import { getArticleById } from "../api";
import ErrorPage from "./ErrorPage";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    showComments: false,
    err: null
  };

  componentDidMount() {
    const { id } = this.props;
    getArticleById(id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        console.log(error.response);
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

  render() {
    const { article, isLoading, showComments, err } = this.state;
    const { loggedInUser } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ArticleDisplayer
              article={article}
              handleClick={this.handleClick}
              showComments={this.showComments}
              loggedInUser={loggedInUser}
            />
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
