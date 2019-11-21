import React, { Component } from "react";
import { updateVotes } from "../api";

class Voter extends Component {
  state = {
    votesAdded: 0,
    error: null,
    showError: false
  };

  handleClick = voteNum => {
    const { id, commArt } = this.props;
    this.setState(currentState => {
      return { votesAdded: currentState.votesAdded + voteNum };
    });

    updateVotes(commArt, id, voteNum).catch(() => {
      const error = {
        status: 500,
        msg: "Vote could not be submitted at this time."
      };
      this.setState(currentState => {
        return {
          votesAdded: currentState.votesAdded - voteNum,
          error,
          showError: true
        };
      });
      setTimeout(() => {
        this.setState({ showError: false });
      }, 4000);
    });
  };

  render() {
    const { votes } = this.props;
    const name = this.props.name || "";
    const { votesAdded, showError, error } = this.state;
    return (
      <section className={`votes${name}`}>
        <button
          className="voteButton"
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={votesAdded === 1}
        >
          UPVOTE
        </button>
        <p className="voteNum">Votes: {votes + votesAdded}</p>
        <button
          className="voteButton"
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={votesAdded === -1}
        >
          DOWNVOTE
        </button>
        {showError && <p className="errorMsg">{error.msg}</p>}
      </section>
    );
  }
}

export default Voter;
