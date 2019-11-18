import React, { Component } from "react";
import ArticleDisplayer from "./ArticleDisplayer";
import CommentsList from "./CommentsList";
import { Router } from "@reach/router";
import { getArticleById } from "../api";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props;
    getArticleById(id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article, isLoading } = this.state;
    return (
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ArticleDisplayer article={article} />
            <Router>
              <CommentsList path="/comments" id={article.article_id} />
            </Router>
          </div>
        )}
      </main>
    );
  }
}

export default ArticlePage;
