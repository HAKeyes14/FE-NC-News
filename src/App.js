import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
      </Router>
    </div>
  );
}

export default App;
