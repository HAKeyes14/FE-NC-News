import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import ArticleSorter from "./ArticleSorter";

class TopicPage extends Component {
  state = {
    sort_by: "votes",
    order: "desc"
  };

  sortArticles = (sort_by, order) => {
    this.setState({ sort_by, order });
  };
  render() {
    const { slug } = this.props;
    const { sort_by, order } = this.state;

    return (
      <>
        <h2 className="topicPageTitle">nc/{slug}</h2>
        <ArticleSorter sortArticles={this.sortArticles} />
        <ArticlesList params={{ topic: slug, sort_by, order }} />
      </>
    );
  }
}

export default TopicPage;
