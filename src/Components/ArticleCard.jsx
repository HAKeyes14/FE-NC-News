import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <Link to={`/article/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>{new Date(article.created_at).toLocaleString()}</p>
    </li>
  );
};

export default ArticleCard;
