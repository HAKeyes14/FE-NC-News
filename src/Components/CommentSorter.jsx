import React, { Component } from "react";

class CommentSorter extends Component {
  state = {
    sort_by: "created_at"
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ sort_by: value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { sort_by } = this.state;
    if (prevState.sort_by !== sort_by) {
      this.props.sortComments(sort_by);
    }
  }

  render() {
    return (
      <form>
        <label>
          Sort by:
          <select onChange={this.handleChange}>
            <option value={"created_at"}>New</option>
            <option value={"votes"}>Top Rated</option>
          </select>
        </label>
      </form>
    );
  }
}

export default CommentSorter;
