import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import ErrorPage from "./ErrorPage";
import PageSelector from "./PageSelector";
import loading from "../assets/loading.gif";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    p: 1,
    limit: 5,
    total_count: 0,
    showSuccess: false
  };

  handlePageClick = direction => {
    window.scrollTo(0, 68);
    this.setState(currentState => {
      return { p: currentState.p + direction };
    });
  };

  handleLimitChange = event => {
    window.scrollTo(0, 68);
    this.setState({ limit: event.target.value, p: 1 });
  };

  componentDidMount() {
    const { p, limit } = this.state;
    const { params, removeSort } = this.props;
    const updatedParams = { ...params, p, limit };
    getArticles(updatedParams)
      .then(({ articles, total_count }) => {
        this.setState({ articles, total_count, isLoading: false });
      })
      .catch(error => {
        if (updatedParams.topic) {
          removeSort();
        }
        this.setState({
          err: { status: error.response.status, msg: error.response.data.msg }
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { p, limit } = this.state;
    const { params, removeSort } = this.props;
    const updatedParams = { ...params, p, limit };
    if (
      prevProps.params !== params ||
      prevState.p !== p ||
      prevState.limit !== limit
    ) {
      getArticles(updatedParams)
        .then(({ articles, total_count }) => {
          this.setState({ articles, total_count, isLoading: false });
        })
        .catch(error => {
          if (updatedParams.topic) {
            removeSort();
          }
          this.setState({
            err: { status: error.response.status, msg: error.response.data.msg }
          });
        });
    }
  }

  removeArticle = article_id => {
    this.setState(currentState => {
      const filteredArticles = currentState.articles.filter(article => {
        return article.article_id !== article_id;
      });
      return { articles: filteredArticles, showSuccess: true };
    });
    setTimeout(() => {
      this.setState({ showSuccess: false });
    }, 3000);
  };

  render() {
    const {
      articles,
      isLoading,
      err,
      p,
      limit,
      total_count,
      showSuccess
    } = this.state;
    const { loggedInUser } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <div>
        {isLoading ? (
          <img src={loading} alt="Loading..." height="80" />
        ) : (
          <>
            <PageSelector
              handlePageClick={this.handlePageClick}
              handleLimitChange={this.handleLimitChange}
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
              handlePageClick={this.handlePageClick}
              handleLimitChange={this.handleLimitChange}
              p={p}
              limit={limit}
              total_count={total_count}
            />
            {showSuccess && <p className="successMsg">Article deleted</p>}
          </>
        )}
      </div>
    );
  }
}

export default ArticlesList;
