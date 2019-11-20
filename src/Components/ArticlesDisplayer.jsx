import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import ArticleSorter from "./ArticleSorter";

class ArticlesDisplayer extends Component {
  state = {
    sort_by: "comment_count",
    order: "desc"
  };

  sortArticles = (sort_by, order) => {
    this.setState({ sort_by, order });
  };

  render() {
    const { sort_by, order } = this.state;
    return (
      <div className="articlesList">
        <h2 className="articlesTitle">Top Articles</h2>
        <ArticleSorter sortArticles={this.sortArticles} />
        <ArticlesList
          params={{
            sort_by,
            order
          }}
        />
      </div>
    );
  }
}

export default ArticlesDisplayer;
