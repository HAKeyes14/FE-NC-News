import React from "react";
import { deleteComment } from "../api";
import UserDisplayer from "./UserDisplayer";
import Voter from "./Voter";

const CommentCard = ({ comment, removeComment, loggedInUser }) => {
  const handleClick = () => {
    if (comment.author === loggedInUser) {
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
      <Voter votes={comment.votes} id={comment.comment_id} commArt="comments" />
      {comment.author === loggedInUser && (
        <section className="commentDelete">
          <button onClick={handleClick}>Delete</button>
        </section>
      )}
    </li>
  );
};

export default CommentCard;
