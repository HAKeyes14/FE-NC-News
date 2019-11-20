import React from "react";

const ArticleDisplayer = ({ article }) => {
  return (
    <>
      <h3 className="topicPageTitle">{article.title}</h3>
      <div className="article">
        <p>{article.topic}</p>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </div>
    </>
  );
};

export default ArticleDisplayer;
