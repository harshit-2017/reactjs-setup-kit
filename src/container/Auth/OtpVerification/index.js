import { otp } from "actions";
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
      this.props.otp(value, this.props);
    }
  };

  render() {
    const { error } = this.state;
    const { loader } = this.props;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OTPVerificationComponent
          handleSubmit={(value) => {
            this.handleSubmit(value);
          }}
          loading={loader}
          error={error}
          autherror={this.props.error}
        />
      </Suspense>
    );
  }
}

function mapStateToProps(state) {
  return {
    loader: state.otp.loader,
    error: state.otp.error,
  };
}

export default connect(mapStateToProps, { otp })(OtpVerification);
