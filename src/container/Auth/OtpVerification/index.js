import { login, setLanguage } from "actions";
import "App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

const OTPVerificationComponent = React.lazy(() =>
  import("components/OTPVerification/OTPVerificationComponent")
);

class OtpVerification extends Component {
  render() {
    console.log("render component");
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OTPVerificationComponent />
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

export default connect(mapStateToProps, { login, setLanguage })(
  OtpVerification
);
