import React from "react";
import { Link } from "@reach/router";
import { deleteArticle } from "../api";
import Voter from "./Voter";

const ArticleCard = ({ article, removeArticle, loggedInUser }) => {
  const handleClick = () => {
    deleteArticle(article.article_id).then(() => {
      removeArticle(article.article_id);
    });
  };

  return (
    <li className="articleCard">
      <Link to={`/article/${article.article_id}`} className="title">
        <h3>{article.title}</h3>
      </Link>
      <Link to={`/topics/${article.topic}`} className="topic">
        <p>nc/{article.topic}</p>
      </Link>
      <div className="author">
        <p>Posted By:</p>{" "}
        <Link to={`/user/${article.author}`}> {article.author}</Link>
      </div>
      <p className="comments">Comments: {article.comment_count}</p>
      <Voter votes={article.votes} id={article.article_id} commArt="articles" />
      <p className="date">{new Date(article.created_at).toLocaleString()}</p>
      {article.author === loggedInUser && (
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      )}
    </li>
  );
};

export default ArticleCard;
