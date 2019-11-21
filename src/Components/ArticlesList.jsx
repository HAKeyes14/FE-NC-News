import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import ErrorPage from "./ErrorPage";
import PageSelector from "./PageSelector";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    p: 1,
    limit: 5,
    total_count: 0
  };

  handleClick = direction => {
    this.setState(currentState => {
      return { p: currentState.p + direction };
    });
  };

  handleChange = event => {
    this.setState({ limit: event.target.value, p: 1 });
  };

  componentDidMount() {
    const { p, limit } = this.state;
    const { params } = this.props;
    params.p = p;
    params.limit = limit;
    getArticles(params)
      .then(({ articles, total_count }) => {
        this.setState({ articles, total_count, isLoading: false });
      })
      .catch(error => {
        this.setState({
          err: { status: error.response.status, msg: error.response.data.msg }
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { p, limit } = this.state;
    const { params } = this.props;
    params.p = p;
    params.limit = limit;
    if (
      prevProps.params !== params ||
      prevState.p !== p ||
      prevState.limit !== limit
    ) {
      getArticles(params).then(({ articles, total_count }) => {
        this.setState({ articles, total_count, isLoading: false });
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
    const { articles, isLoading, err, p, limit, total_count } = this.state;
    const { loggedInUser } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <PageSelector
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              p={p}
              limit={limit}
              total_count={total_count}
            />
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
            <PageSelector
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              p={p}
              limit={limit}
              total_count={total_count}
            />
          </>
        )}
      </div>
    );
  }
}

export default ArticlesList;
