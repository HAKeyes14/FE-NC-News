import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import Homepage from "./Components/Homepage";
import ArticlePage from "./Components/ArticlePage";
import TopicPage from "./Components/TopicPage";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";

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
        <Login changeUser={this.changeUser} />
        <Header />
        <Router>
          <Homepage path="/" loggedInUser={loggedInUser} />
          <ArticlePage path="/article/:id/*" loggedInUser={loggedInUser} />
          <TopicPage path="/topics/:slug" loggedInUser={loggedInUser} />
          <UserPage path="/user/:username" loggedInUser={loggedInUser} />
          <ErrorPage error={{ status: 404, msg: "Page Not Found" }} default />
        </Router>
      </div>
    );
  }
}

export default App;
