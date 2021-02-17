import React from "react";
import "./App.css";
import { logo } from "./assets/images";
import { Login, UserVerification, OtpVerification, SignUp } from "./container";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppContainerWithErrorBoundary from "hoc";
const LoginContainer = AppContainerWithErrorBoundary(Login);
const UserVerificationContainer = AppContainerWithErrorBoundary(
  UserVerification
);
const SignUpContainer = AppContainerWithErrorBoundary(SignUp);
const OtpVerificationContainer = AppContainerWithErrorBoundary(OtpVerification);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/userverification" component={UserVerificationContainer} />
        <Route path="/otpverification" component={OtpVerificationContainer} />
      </Switch>
    </Router>
  );
}

export default App;
