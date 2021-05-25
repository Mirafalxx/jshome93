import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./Components/UI/Layout/Layout";
import EventsList from "./Containers/EventsList/EventsList";
import NewEventsList from "./Containers/NewEventsList/NewEventsList";
import Register from "./Containers/Register/Register";
import Login from "./Containers/Login/Login";
import { Helmet } from "react-helmet";

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

const App = () => {
  const user = useSelector((state) => state.users.user);

  return (
    <Layout>
      <Helmet titleTemplate="%s - PC Parts" defaultTitle="Shop" />
      <Switch>
        <Route path="/" exact component={EventsList} />
        {/* <Route path="/category/:id" component={Products} /> */}
        <ProtectedRoute
          path="/events/new"
          component={NewEventsList}
          isAllowed={user && user.role === "admin"}
          redirectTo="/login"
        />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Layout>
  );
};

export default App;
