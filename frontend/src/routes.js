import React from "react";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/incident/new" exact component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
