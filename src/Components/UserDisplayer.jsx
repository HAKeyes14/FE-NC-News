import React, { Component } from "react";
import { getUserById } from "../api";
import defaultUser from "../assets/default-user.jpg";
import loading from "../assets/loading.gif";

class UserDisplayer extends Component {
  state = {
    user: {},
    isLoading: true
  };

  componentDidMount() {
    const { username } = this.props;
    getUserById(username).then(user => {
      this.setState({ user, isLoading: false });
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
    const { user, isLoading } = this.state;
    const { username } = this.props;
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
