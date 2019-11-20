import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ topic }) => {
  return (
    <li className="topicCard">
      <Link to={`/topics/${topic.slug}`} className="topicLink">
        <h3 className="topicCardTitle">nc/{topic.slug}</h3>
        <p className="topicDescription">{topic.description}</p>
      </Link>
    </li>
  );
};

export default TopicCard;
