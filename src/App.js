import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import Homepage from "./Components/Homepage";
import ArticlePage from "./Components/ArticlePage";
import TopicPage from "./Components/TopicPage";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Components/Login";

class App extends React.Component {
  state = {
    loggedInUser: "tickle122"
  };

  changeUser = name => {
    this.setState({ loggedInUser: name });
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header />
        <Login changeUser={this.changeUser} />
        <Router>
          <Homepage path="/" loggedInUser={loggedInUser} />
          <ArticlePage path="/article/:id/*" loggedInUser={loggedInUser} />
          <TopicPage path="/topics/:slug" />
          <ErrorPage error={{ status: 404, msg: "Page Not Found" }} default />
        </Router>
      </div>
    );
  }
}

export default App;
