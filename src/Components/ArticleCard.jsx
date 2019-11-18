import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{new Date(article.created_at).toLocaleString()}</p>
    </li>
  );
};

export default ArticleCard;
