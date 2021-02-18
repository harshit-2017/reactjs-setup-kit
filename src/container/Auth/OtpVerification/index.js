import { login, setLanguage } from "actions";
import "App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

const OTPVerificationComponent = React.lazy(() =>
  import("components/OTPVerification/OTPVerificationComponent")
);
class OtpVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: { errorField: "", errorMessage: "" },
    };
  }
  handleSubmit = (value) => {
    if (!value.OTP || value.OTP.length < 4) {
      this.setState({
        error: {
          errorField: "otp",
          errorMessage: "Please fill OTP.",
        },
      });
    } else {
      this.setState({
        error: {
          errorField: "",
          errorMessage: "",
        },
      });
      console.log(value.OTP);
    }
  };

  render() {
    const { error } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OTPVerificationComponent
          handleSubmit={(value) => {
            this.handleSubmit(value);
          }}
          error={error}
        />
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
