import React, { Component } from "react";
import "./UserVerificationComponent.css";
import { InputComponent } from "components/CommonComponents";
import "antd/dist/antd.css";

const UserVerificationComponent = (props) => {
  const { handleSubmit, error } = props;

  const [username, setUserName] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        handleSubmit({ username: username });
        event.preventDefault();
      }}
    >
      <h1>User Verification</h1>
      <InputComponent
        label="Enter Email/Mobile:"
        name="username"
        type="text"
        value={username}
        error={error}
        onChange={(value) => {
          setUserName(value);
        }}
      />

      <button className={"buttonStl"}>Submit</button>
    </form>
  );
};
export default UserVerificationComponent;
