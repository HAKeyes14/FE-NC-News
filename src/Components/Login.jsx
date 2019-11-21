import React, { Component } from "react";

class Login extends Component {
  state = {
    selectedUser: ""
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ selectedUser: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { selectedUser } = this.state;
    const { changeUser } = this.props;
    changeUser(selectedUser);
  };

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <label>
          Select User:{" "}
          <select onChange={this.handleChange}>
            <option value="tickle122">tickle122</option>
            <option value="weegembump">weegembump</option>
            <option value="jessjelly">jessjelly</option>
            <option value="grumpy19">grumpy19</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="happyamy2016">happyamy2016</option>
          </select>
        </label>
        <button>Log In</button>
      </form>
    );
  }
}

export default Login;
