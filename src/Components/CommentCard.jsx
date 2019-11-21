import React from "react";
import { deleteComment } from "../api";
import UserDisplayer from "./UserDisplayer";
import Voter from "./Voter";

const CommentCard = ({ comment, removeComment }) => {
  const handleClick = () => {
    if (comment.author === "jessjelly") {
      deleteComment(comment.comment_id).then(() => {
        removeComment(comment.comment_id);
      });
    }
  };

  return (
    <li className="commentCard">
      <p className="commentDate">
        {new Date(comment.created_at).toLocaleString()}
      </p>
      <UserDisplayer username={comment.author} />
      <p className="commentBody">{comment.body}</p>
      <Voter votes={comment.votes} id={comment.article_id} commArt="comments" />
      {comment.author === "jessjelly" && (
        <section className="commentDelete">
          <button onClick={handleClick}>Delete</button>
        </section>
      )}
    </li>
  );
};

export default CommentCard;
