import React, { Component } from "react";
import { getUserById } from "../api";

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
      const url =
        "https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg";
      const fixedUser = currentState.user;
      fixedUser.avatar_url = url;
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
          <p>Loading...</p>
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
