import React, { Component } from "react";
import "./OTPVerificationComponent.css";
import OtpInput from "react-otp-input";

export default function UserVerificationComponent() {
  const [otp, setOtp] = React.useState("");
  const handleChange = (otp) => setOtp(otp);

  const handleSubmit = (event) => {
    console.log(`
      OTP: ${otp}
    `);

    event.preventDefault();
  };

  const mystyle = {
    display: "flex",
    width: 300 / 4,
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button>Submit</button>
    </form>
  );
}
