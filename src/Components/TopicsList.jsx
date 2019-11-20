import React, { Component } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../api";

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;

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
