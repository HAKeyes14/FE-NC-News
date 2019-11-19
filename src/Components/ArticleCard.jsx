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
    <li>
      <Link to={`/article/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>{article.topic}</p>
      <UserDisplayer username={article.author} />
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>{new Date(article.created_at).toLocaleString()}</p>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default ArticleCard;
