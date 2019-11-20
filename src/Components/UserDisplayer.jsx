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
          />
        )}
      </section>
    );
  }
}

export default UserDisplayer;
