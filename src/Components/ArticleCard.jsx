import React from "react";
import { Link } from "@reach/router";
import { deleteArticle } from "../api";
import UserDisplayer from "./UserDisplayer";

const ArticleCard = ({ article, removeArticle }) => {
  const handleClick = () => {
    if (article.author === "jessjelly") {
      deleteArticle(article.article_id).then(() => {
        removeArticle(article.article_id);
      });
    }
  };

  return (
    <li className="articleCard">
      <Link to={`/article/${article.article_id}`} className="title">
        <h3>{article.title}</h3>
      </Link>
      <Link to={`/topics/${article.topic}`} className="topic">
        <p>nc/{article.topic}</p>
      </Link>
      <UserDisplayer username={article.author} />
      <p className="comments">Comments: {article.comment_count}</p>
      <p className="votes">Votes: {article.votes}</p>
      <p className="date">{new Date(article.created_at).toLocaleString()}</p>
      {article.author === "jessjelly" && (
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      )}
    </li>
  );
};

export default ArticleCard;
