import React, { Component } from "react";
import { getUserById } from "../api";
import defaultUser from "../assets/default-user.jpg";
import loading from "../assets/loading.gif";
import ErrorPage from "./ErrorPage";

class UserDisplayer extends Component {
  state = {
    user: {},
    isLoading: true,
    err: null
  };

  componentWillUnmount() {
    console.log("here");
  }

  componentDidMount() {
    const { username } = this.props;
    getUserById(username)
      .then(user => {
        this.setState({ user, isLoading: false });
      })
      .catch(error => {
        this.setState({
          err: { status: error.response.status, msg: error.response.data.msg }
        });
      });
  }

  handleError = () => {
    this.setState(currentState => {
      const fixedUser = currentState.user;
      fixedUser.avatar_url = defaultUser;
      return { user: fixedUser };
    });
  };

  render() {
    const { user, isLoading, err } = this.state;
    const { username } = this.props;
    if (err !== null) return <ErrorPage error={err} />;
    return (
      <section className="author">
        <p className="username">Posted by: {username}</p>
        {isLoading ? (
          <img src={loading} alt="Loading..." height="40" />
        ) : (
          <img
            src={user.avatar_url}
            alt="user avatar"
            height="20"
            width="20"
            className="userIcon"
            onError={this.handleError}
          />
        )}
      </section>
    );
  }
}

export default UserDisplayer;
