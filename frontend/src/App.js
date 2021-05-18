import React from "react";
import { Route, Switch } from "react-router";
import AppToolbar from "./Components/UI/AppToolbar/AppToolbar";
import Register from "./Containers/Register/Register";
import Login from "./Containers/Login/Login";
import NewEvent from "./Containers/NewEvent/NewEvent";
import Layout from "./Components/UI/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={NewEvent} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Layout>
  );
};

export default App;
