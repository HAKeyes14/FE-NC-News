import React from "react";
import Voter from "./Voter";

const ArticleDisplayer = ({ article }) => {
  console.log(article);
  return (
    <>
      <h3 className="topicPageTitle">{article.title}</h3>
      <div className="article">
        <p className="topicArticle">nc/{article.topic}</p>
        <p>{article.author}</p>
        <p>{article.created_at}</p>
        <p>{article.body}</p>
        <Voter
          name="Article"
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
