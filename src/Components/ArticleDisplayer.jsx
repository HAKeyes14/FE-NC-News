import React from "react";

const ArticleDisplayer = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.topic}</p>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleDisplayer;
