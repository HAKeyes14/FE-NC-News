import React, { Component } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../api";

class TopicsList extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <div className="topicsList">
        <h2>Topics</h2>
        <ul>
          {this.state.topics.map(topic => (
            <TopicCard topic={topic} key={topic.slug} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TopicsList;
