import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Context, { defaultState } from "./context";
import Home from "./pages/Home";

function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}

export default App;
