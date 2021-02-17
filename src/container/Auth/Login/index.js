import { login, setLanguage } from "actions";
import "App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

const LoginComponent = React.lazy(() =>
  import("components/Login/LoginComponent")
);

class Login extends Component {
  render() {
    console.log("render component");
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent />
      </Suspense>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.login.data.title,
    loader: state.login.loader,
    language: state.userPreference.language,
  };
}

export default connect(mapStateToProps, { login, setLanguage })(Login);
