import React, { Component } from "react";

class CommentSorter extends Component {
  state = {
    sort_by: "created_at"
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ sort_by: value });
  };

  handleSubmit = event => {
    const { sortComments } = this.props;
    const { sort_by } = this.state;
    event.preventDefault();
    sortComments(sort_by);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Sort by:
          <select onChange={this.handleChange}>
            <option value={"created_at"}>New</option>
            <option value={"votes"}>Top Rated</option>
          </select>
        </label>
        <button>Sort</button>
      </form>
    );
  }
}

export default CommentSorter;
