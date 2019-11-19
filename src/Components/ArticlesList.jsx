import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    const { params } = this.props;
    getArticles(params).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps) {
    const { params } = this.props;
    if (prevProps.params !== params) {
      getArticles(params).then(articles => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
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
