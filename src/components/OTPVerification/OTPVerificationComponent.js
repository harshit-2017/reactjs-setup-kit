import React, { Component } from "react";
import "./OTPVerificationComponent.css";
import OtpInput from "react-otp-input";

export default function UserVerificationComponent(props) {
  const { handleSubmit, error } = props;

  const [otp, setOtp] = React.useState("");
  const handleChange = (otp) => setOtp(otp);

  const mystyle = {
    display: "flex",
    width: 300 / 4,
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit({ OTP: otp });
        event.preventDefault();
      }}
    >
      <h1>OTP Verification</h1>

      <OtpInput
        inputStyle={mystyle}
        value={otp}
        onChange={(text) => {
          handleChange(text);
        }}
        numInputs={4}
        separator={<span>-</span>}
      />
      {error.errorMessage != "" && (
        <label style={{ color: "red" }}>{error.errorMessage}</label>
      )}
      <button>Submit</button>
    </form>
  );
}
