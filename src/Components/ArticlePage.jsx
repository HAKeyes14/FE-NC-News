import React, { Component } from "react";
import ArticleDisplayer from "./ArticleDisplayer";
import CommentsList from "./CommentsList";
import { Router } from "@reach/router";
import { getArticleById } from "../api";

class ArticlePage extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const { id } = this.props;
    getArticleById(id).then(article => {
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <main>
        <ArticleDisplayer article={article} />
        <Router>
          <CommentsList path="/comments" article={article} />
        </Router>
      </main>
    );
  }
}

export default ArticlePage;
