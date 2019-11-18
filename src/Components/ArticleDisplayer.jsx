import React from "react";

const ArticleDisplayer = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDisplayer;
