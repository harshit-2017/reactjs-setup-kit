import React, { Component } from "react";
import "./LoginComponent.css";
import {
  InputComponent,
  LoaderButtonComponent,
} from "components/CommonComponents";

export default function LoginComponent(props) {
  const { error, handleSubmit, loading } = props;
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        handleSubmit({ username: username, password: password });
        event.preventDefault();
      }}
    >
      <h1>Login</h1>
      <InputComponent
        label="Username:"
        name="username"
        type="text"
        value={username}
        onChange={(value) => setUserName(value)}
        error={error}
      />

      <InputComponent
        label="Password::"
        name="password"
        type="password"
        value={password}
        onChange={(value) => setPassword(value)}
        error={error}
      />
      <LoaderButtonComponent loading={loading} text="Login" />
    </form>
  );
}
