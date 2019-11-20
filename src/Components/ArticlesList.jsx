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

  removeArticle = article_id => {
    this.setState(currentState => {
      const filteredArticles = currentState.articles.filter(article => {
        return article.article_id !== article_id;
      });
      return { articles: filteredArticles };
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-articles">
            {articles.map(article => (
              <ArticleCard
                article={article}
                key={article.title}
                removeArticle={this.removeArticle}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ArticlesList;
