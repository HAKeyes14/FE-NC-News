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
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <img
          src={user.avatar_url}
          alt="user avatar"
          height="40"
          width="40"
        ></img>
        <p>{user.username}</p>
      </>
    );
  }
}

export default UserDisplayer;
