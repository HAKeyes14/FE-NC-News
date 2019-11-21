import React from "react";
import Voter from "./Voter";
import { Link } from "@reach/router";
import UserDisplayer from "./UserDisplayer";

const ArticleDisplayer = ({ article, showComments, handleClick }) => {
  return (
    <>
      <h3 className="topicPageTitle">{article.title}</h3>
      <div className="article">
        <Link to={`/topics/${article.topic}`} className="topicArticle">
          <p>nc/{article.topic}</p>
        </Link>
        <UserDisplayer username={article.author} />
        <p className="dateArticle">
          {new Date(article.created_at).toLocaleString()}
        </p>
        <p className="bodyArticle">{article.body}</p>
        <Voter
          name="Article"
          votes={article.votes}
          id={article.article_id}
          commArt="articles"
        />
        <p className="commentsArticle">Comments: {article.comment_count}</p>
        <section className="commentButton">
          <button onClick={handleClick}>
            {showComments ? <p>Hide Comments</p> : <p>Show Comments</p>}
          </button>
        </section>
      </div>
    </>
  );
};

export default ArticleDisplayer;
