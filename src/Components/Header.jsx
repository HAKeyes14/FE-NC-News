import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <Link to="/" className="header">
      <h1>NC News</h1>
    </Link>
  );
};

export default Header;
