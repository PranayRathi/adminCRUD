import React from "react";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/home"
          render={(props) => <Home display={true} {...props} />}
        />
        <Redirect to="/login" />
      </Switch>
  );
}
