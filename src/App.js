import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import Homepage from "./Components/Homepage";
import ArticlePage from "./Components/ArticlePage";
import TopicPage from "./Components/TopicPage";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <ArticlePage path="/article/:id/*" />
        <TopicPage path="/topics/:slug" />
        <ErrorPage error={{ status: 404, msg: "Page Not Found" }} default />
      </Router>
    </div>
  );
}

export default App;
