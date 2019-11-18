import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";

class ArticlesList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles });
    });
  }

  render() {
    return (
      <div className="articlesList">
        <h2>Top Articles</h2>
        <ul>
          {this.state.articles.map(article => (
            <ArticleCard article={article} key={article.title} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ArticlesList;
