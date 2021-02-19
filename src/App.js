import React from "react";
import "./App.css";
import { logo } from "./assets/images";
import {
  Login,
  Home,
  UserVerification,
  OtpVerification,
  SignUp,
} from "./container";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import AppContainerWithErrorBoundary from "hoc";
const LoginContainer = AppContainerWithErrorBoundary(Login);
const UserVerificationContainer = AppContainerWithErrorBoundary(
  UserVerification
);
const SignUpContainer = AppContainerWithErrorBoundary(SignUp);
const OtpVerificationContainer = AppContainerWithErrorBoundary(OtpVerification);
const HomeContainer = AppContainerWithErrorBoundary(Home);

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/userverification" />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route
          exact
          path="/userverification"
          component={UserVerificationContainer}
        />
        <Route
          exact
          path="/otpverification"
          component={OtpVerificationContainer}
        />
        <Route exact path="/home" component={HomeContainer} />
      </Switch>
    </Router>
  );
}

export default App;
