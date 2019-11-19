import React from "react";
import { Link } from "@reach/router";

const ArticleDisplayer = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.topic}</p>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <Link to={`/article/${article.article_id}/comments`}>
        <p>Comments: {article.comment_count}</p>
      </Link>
    </div>
  );
};

export default ArticleDisplayer;
