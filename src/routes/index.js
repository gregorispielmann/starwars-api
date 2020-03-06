import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Character from "../pages/Character";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main}></Route>
      <Route path="/character/:id" component={Character}></Route>
    </Switch>
  );
}
