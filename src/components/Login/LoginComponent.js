import React, { Component } from "react";
import "./LoginComponent.css";
export default function LoginComponent() {
  const [username, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${username}
      Password: ${password}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label>
        Username:
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button>Login</button>
    </form>
  );
}
