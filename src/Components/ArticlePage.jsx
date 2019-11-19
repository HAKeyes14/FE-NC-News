import React, { Component } from "react";
import ArticleDisplayer from "./ArticleDisplayer";
import CommentsList from "./CommentsList";
import { getArticleById } from "../api";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    showComments: false
  };

  componentDidMount() {
    const { id } = this.props;
    getArticleById(id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  handleClick = () => {
    this.setState(currentState => {
      return { showComments: !currentState.showComments };
    });
  };

  render() {
    const { article, isLoading, showComments } = this.state;
    return (
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ArticleDisplayer article={article} />
            <button onClick={this.handleClick}>
              {showComments ? <p>Hide Comments</p> : <p>Show Comments</p>}
            </button>
            {showComments && (
              <CommentsList path="/comments" id={article.article_id} />
            )}
          </div>
        )}
      </main>
    );
  }
}

export default ArticlePage;
