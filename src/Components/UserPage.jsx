import UserDisplayer from "./UserDisplayer";
import ArticlesList from "./ArticlesList";
import React, { Component } from "react";
import ErrorPage from "./ErrorPage";

class UserPage extends Component {
  state = {
    err: null
  };

  setErr = err => {
    this.setState({ err });
  };
  render() {
    const { err } = this.state;
    const { username, loggedInUser } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <>
        <UserDisplayer username={username} setErr={this.setErr} />
        <p>{username}'s Articles:</p>
        <ArticlesList
          params={{ author: username }}
          loggedInUser={loggedInUser}
        />
      </>
    );
  }
}

export default UserPage;
