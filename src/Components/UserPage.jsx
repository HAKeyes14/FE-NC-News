import React from "react";
import UserDisplayer from "./UserDisplayer";
import ArticlesList from "./ArticlesList";

const UserPage = ({ username, loggedInUser }) => {
  return (
    <div>
      <UserDisplayer username={username} />
      <p>{username}'s Articles:</p>
      <ArticlesList params={{ author: username }} loggedInUser={loggedInUser} />
    </div>
  );
};

export default UserPage;
