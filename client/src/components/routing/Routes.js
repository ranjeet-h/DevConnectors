import React from "react";
import Alert from "../layout/Alert";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Register from "./../auth/Register";
import Login from "./../auth/Login";
import Profiles from "./../profiles/Profiles";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "./../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "./../profile-forms/AddExperience";
import AddEducation from "./../profile-forms/AddEducation";
import Posts from "./../posts/Posts";
import Post from "./../post/Post";
import { NotFound } from "./../layout/NotFound";

 const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profiles} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route  component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;