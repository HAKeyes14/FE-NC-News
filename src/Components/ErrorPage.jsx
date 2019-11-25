import React from "react";
import { Link } from "@reach/router";

const ErrorPage = ({ error: { status, msg } }) => {
  return (
    <section className="errPage">
      <h2>{status}</h2>
      <h3>{msg}</h3>
      <Link to="/">
        <p>Back to homepage</p>
      </Link>
    </section>
  );
};

export default ErrorPage;
