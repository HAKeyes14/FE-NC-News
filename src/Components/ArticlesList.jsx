import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="articlesList">
        <h2>Top Articles</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {articles.map(article => (
              <ArticleCard article={article} key={article.title} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ArticlesList;
