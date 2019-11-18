import React, { Component } from "react";
import ArticleDisplayer from "./ArticleDisplayer";
import CommentsList from "./CommentsList";
import { Router } from "@reach/router";

class ArticlePage extends Component {
  state = {
    article: {
      title: "Seafood substitutions are increasing",
      topic: "cooking",
      author: "weegembump",
      body: "Text from the article..",
      created_at: 1527695953341,
      votes: 0,
      comment_count: 3,
      article_id: 1
    }
  };

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
