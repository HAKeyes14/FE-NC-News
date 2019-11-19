import React from "react";
import TopicsList from "./TopicsList";
import ArticlesDisplayer from "./ArticlesDisplayer";

const Homepage = () => {
  return (
    <main className="homepage">
      <ArticlesDisplayer />
      <TopicsList />
    </main>
  );
};

export default Homepage;
