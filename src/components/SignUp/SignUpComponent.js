import "./SignupComponent.css";
import React from "react";
import { InputComponent } from "components/CommonComponents";
export default function SignupComponent(props) {
  const { error, handleSubmit } = props;
  const [username, setUserName] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        handleSubmit({ name: name, username: username, password: password });
        event.preventDefault();
      }}
    >
      <h1>Create User</h1>
      <InputComponent
        label="Name:"
        name="name"
        type="text"
        value={name}
        onChange={(value) => setName(value)}
        error={error}
      />

      <InputComponent
        label="Username:"
        name="username"
        type="text"
        value={username}
        onChange={(value) => setUserName(value)}
        error={error}
      />
      <InputComponent
        label="Password:"
        name="password"
        type="password"
        value={password}
        onChange={(value) => setPassword(value)}
        error={error}
      />

      <button>Create User</button>
    </form>
  );
}
