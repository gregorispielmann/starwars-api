import React from "react";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/global";

import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <Router history={history}>
      <GlobalStyle></GlobalStyle>
      <Routes></Routes>
    </Router>
  );
}

export default App;
