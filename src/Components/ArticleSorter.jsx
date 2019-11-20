import React, { Component } from "react";

class ArticleSorter extends Component {
  state = {
    sort_by: "comment_count",
    order: "desc"
  };

  handleChange = event => {
    const { value } = event.target;
    const params = value.split(",");
    this.setState({ sort_by: params[0], order: params[1] });
  };

  handleSubmit = event => {
    const { sortArticles } = this.props;
    const { sort_by, order } = this.state;
    event.preventDefault();
    sortArticles(sort_by, order);
  };

  render() {
    return (
      <form className="articleSort" onSubmit={this.handleSubmit}>
        <label className="dropdown">
          Sort by:{" "}
          <select onChange={this.handleChange}>
            <option value={"votes,desc"}>Top Rated</option>
            <option value={"created_at,desc"}>New</option>
            <option value={"comment_count,desc"}>Most Commented</option>
          </select>
        </label>
        <button className="sortButton">Sort</button>
      </form>
    );
  }
}

export default ArticleSorter;
