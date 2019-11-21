import React, { Component } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../api";
import ErrorPage from "./ErrorPage";

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(error => {
        this.setState({
          err: { status: error.response.status, msg: error.response.data.msg }
        });
      });
  }

  render() {
    const { topics, isLoading, err } = this.state;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <div className="topicsList">
        <h2 className="topicsTitle">Topics</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-topic">
            {topics.map(topic => (
              <TopicCard topic={topic} key={topic.slug} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TopicsList;
