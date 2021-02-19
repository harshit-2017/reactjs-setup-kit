import React, { Component } from "react";
import "./OTPVerificationComponent.css";
import OtpInput from "react-otp-input";
import { LoaderButtonComponent } from "components/CommonComponents";
export default function UserVerificationComponent(props) {
  const { handleSubmit, loading, error, autherror } = props;

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

      <LoaderButtonComponent loading={loading} text="Submit" />
      {autherror != "" && <label style={{ color: "red" }}>{autherror}</label>}
    </form>
  );
}
