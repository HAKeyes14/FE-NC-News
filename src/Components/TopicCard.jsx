import React from "react";

const TopicCard = ({ topic }) => {
  return (
    <li>
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </li>
  );
};

export default TopicCard;
