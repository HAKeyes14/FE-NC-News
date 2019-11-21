import React from "react";
import TopicsList from "./TopicsList";
import ArticlesDisplayer from "./ArticlesDisplayer";

const Homepage = ({ loggedInUser }) => {
  return (
    <main className="homepage">
      <ArticlesDisplayer loggedInUser={loggedInUser} />
      <TopicsList />
    </main>
  );
};

export default Homepage;
