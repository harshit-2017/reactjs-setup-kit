import React, { Component } from "react";
import "./UserVerificationComponent.css";
import {
  InputComponent,
  LoaderButtonComponent,
} from "components/CommonComponents";

import "antd/dist/antd.css";

const UserVerificationComponent = (props) => {
  const { handleSubmit, loading, error, autherror } = props;

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
      <LoaderButtonComponent
        className={"buttonStl"}
        loading={loading}
        text="Submit"
      />
      {autherror != "" && <label style={{ color: "red" }}>{autherror}</label>}
    </form>
  );
};
export default UserVerificationComponent;
