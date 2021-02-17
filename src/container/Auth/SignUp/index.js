import { login, setLanguage } from "actions";
import "App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

const SignUpComponent = React.lazy(() =>
  import("components/SignUp/SignUpComponent")
);

class SignUp extends Component {
  render() {
    console.log("render component");
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpComponent />
      </Suspense>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(SignUp);
