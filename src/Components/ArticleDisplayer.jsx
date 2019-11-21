import React from "react";
import Voter from "./Voter";
import { Link, navigate } from "@reach/router";
import UserDisplayer from "./UserDisplayer";
import { deleteArticle } from "../api";

const ArticleDisplayer = ({
  article,
  showComments,
  loggedInUser,
  handleClick
}) => {
  const handleDeleteClick = () => {
    deleteArticle(article.article_id).then(() => {
      navigate("/");
    });
  };

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
