import React from "react";
import Voter from "./Voter";
import { Link, navigate } from "@reach/router";
import { deleteArticle } from "../api";

const ArticleDisplayer = ({
  article,
  showComments,
  loggedInUser,
  handleClick,
  toggleShowErr
}) => {
  const handleDeleteClick = () => {
    deleteArticle(article.article_id)
      .then(() => {
        navigate("/");
      })
      .catch(err => {
        toggleShowErr();
      });
  };

  return (
    <>
      <h2 className="topicPageTitle">{article.title}</h2>
      <div className="article">
        <Link to={`/topics/${article.topic}`} className="topicArticle">
          <p>nc/{article.topic}</p>
        </Link>
        <div className="author">
          <p>Posted By:</p>{" "}
          <Link to={`/user/${article.author}`}> {article.author}</Link>
        </div>
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
        {article.author === loggedInUser && (
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default ArticleDisplayer;
