import React, { Component } from "react";
import { updateVotes } from "../api";

class Voter extends Component {
  state = {
    votesAdded: 0,
    error: null,
    showError: false,
    hasDownVoted: false,
    hasUpVoted: false
  };

  disableButtons = (currentAdded, voteNum) => {
    if (currentAdded + voteNum === -1) {
      this.setState({ hasDownVoted: true });
    } else if (currentAdded + voteNum === 1) {
      this.setState({ hasUpVoted: true });
    } else if (currentAdded + voteNum === 0) {
      this.setState({ hasUpVoted: false, hasDownVoted: false });
    }
  };

  handleClick = voteNum => {
    const { id, commArt } = this.props;
    this.setState(currentState => {
      return { votesAdded: currentState.votesAdded + voteNum };
    });
    this.disableButtons(this.state.votesAdded, voteNum);
    updateVotes(commArt, id, voteNum).catch(() => {
      const error = {
        status: 500,
        msg: "Vote could not be submitted at this time."
      };
      this.setState(currentState => {
        return {
          votesAdded: currentState.votesAdded - voteNum,
          error,
          showError: true,
          hasUpVoted: false,
          hasDownVoted: false
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
    const {
      votesAdded,
      showError,
      hasUpVoted,
      hasDownVoted,
      error
    } = this.state;
    return (
      <section className={`votes${name}`}>
        <button
          className="voteButton"
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={hasUpVoted}
        >
          UPVOTE
        </button>
        <p className="voteNum">Votes: {votes + votesAdded}</p>
        <button
          className="voteButton"
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={hasDownVoted}
        >
          DOWNVOTE
        </button>
        {showError && <p className="errorMsg">{error.msg}</p>}
      </section>
    );
  }
}

export default Voter;
