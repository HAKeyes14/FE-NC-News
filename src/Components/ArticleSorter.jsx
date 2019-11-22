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

  componentDidUpdate(prevProps, prevState) {
    const { sortArticles } = this.props;
    const { order, sort_by } = this.state;
    if (prevState.order !== order || prevState.sort_by !== sort_by) {
      sortArticles(sort_by, order);
    }
  }

  render() {
    return (
      <form className="articleSort">
        <label className="dropdown">
          Sort by:{" "}
          <select onChange={this.handleChange}>
            <option value={"votes,desc"}>Top Rated</option>
            <option value={"created_at,desc"}>New</option>
            <option value={"comment_count,desc"}>Most Commented</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ArticleSorter;
