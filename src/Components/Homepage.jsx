import React from "react";
import ArticlesList from "./ArticlesList";
import TopicsList from "./TopicsList";

const Homepage = () => {
  return (
    <main className="homepage">
      <ArticlesList />
      <TopicsList />
    </main>
  );
};

export default Homepage;
