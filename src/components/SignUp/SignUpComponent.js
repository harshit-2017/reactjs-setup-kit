import "./SignupComponent.css";
import React from "react";
export default function SignupComponent() {
  const [username, setUserName] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      Password: ${password}
      UserName: ${username}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create User</h1>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Username:
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
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

      <button>Create User</button>
    </form>
  );
}
