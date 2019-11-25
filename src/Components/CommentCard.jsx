import React from "react";
import { deleteComment } from "../api";
import { Link } from "@reach/router";
import Voter from "./Voter";

const CommentCard = ({
  comment,
  removeComment,
  loggedInUser,
  toggleShowErr
}) => {
  const handleClick = () => {
    deleteComment(comment.comment_id)
      .then(() => {
        removeComment(comment.comment_id);
      })
      .catch(error => {
        toggleShowErr();
      });
  };

  return (
    <li className="commentCard">
      <p className="commentDate">
        {new Date(comment.created_at).toLocaleString()}
      </p>
      <div className="author">
        <p>Posted By:</p>{" "}
        <Link to={`/user/${comment.author}`}> {comment.author}</Link>
      </div>
      <p className="commentBody">{comment.body}</p>
      <Voter votes={comment.votes} id={comment.article_id} commArt="comments" />
      {comment.author === loggedInUser && (
        <section className="commentDelete">
          <button onClick={handleClick}>Delete</button>
        </section>
      )}
    </li>
  );
};

export default CommentCard;
