import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import ErrorPage from "./ErrorPage";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { params } = this.props;
    getArticles(params)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => {
        this.setState({
          err: { status: error.response.status, msg: error.response.data.msg }
        });
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
    const { articles, isLoading, err } = this.state;
    const { loggedInUser } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
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
                loggedInUser={loggedInUser}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ArticlesList;
