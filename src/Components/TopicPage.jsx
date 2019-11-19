import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

class TopicPage extends Component {
  state = {
    articles: {},
    isLoading: true
  };

  componentDidMount() {
    const { slug } = this.props;
    const params = { topic: slug };
    getArticles(params).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <ul>
        {articles.map(article => (
          <ArticleCard
            article={article}
            key={article.title}
            removeArticle={this.removeArticle}
          />
        ))}
      </ul>
    );
  }
}

export default TopicPage;
