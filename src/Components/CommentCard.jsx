import React from "react";
import { deleteComment } from "../api";
import UserDisplayer from "./UserDisplayer";

const CommentCard = ({ comment, removeComment }) => {
  const handleClick = () => {
    if (comment.author === "jessjelly") {
      deleteComment(comment.comment_id).then(() => {
        removeComment(comment.comment_id);
      });
    }
  };

  return (
    <li>
      <p>{new Date(comment.created_at).toLocaleString()}</p>
      <UserDisplayer username={comment.author} />
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default CommentCard;
