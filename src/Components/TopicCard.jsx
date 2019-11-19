import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ topic }) => {
  return (
    <li>
      <Link to={`/topics/${topic.slug}`}>
        <h3>{topic.slug}</h3>
      </Link>
      <p>{topic.description}</p>
    </li>
  );
};

export default TopicCard;
