import React from "react";
import Voter from "./Voter";

const ArticleDisplayer = ({ article }) => {
  return (
    <>
      <h3 className="topicPageTitle">{article.title}</h3>
      <div className="article">
        <p>{article.topic}</p>
        <p>{article.body}</p>
        <Voter
          votes={article.votes}
          id={article.article_id}
          commArt="articles"
        />
        <p>Comments: {article.comment_count}</p>
      </div>
    </>
  );
};

export default ArticleDisplayer;
