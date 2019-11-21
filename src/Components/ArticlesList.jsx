import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import ErrorPage from "./ErrorPage";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    p: 1,
    limit: 3,
    total_count: 0
  };

  handleClick = direction => {
    this.setState(currentState => {
      return { p: currentState.p + direction };
    });
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
    if (prevProps.params !== params || prevState.p !== p) {
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
            {p !== 1 && (
              <button onClick={() => this.handleClick(-1)}>Prev</button>
            )}
            <p>Page: {p}</p>
            {Math.ceil(total_count / limit) !== p && (
              <button onClick={() => this.handleClick(1)}>Next</button>
            )}
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
          </>
        )}
      </div>
    );
  }
}

export default ArticlesList;
