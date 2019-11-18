import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <li>
      <p>{new Date(comment.created_at).toLocaleString()}</p>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
    </li>
  );
};

export default CommentCard;
