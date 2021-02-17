import React, { Component } from "react";
import "./UserVerificationComponent.css";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export default function UserVerificationComponent() {
  const [username, setEmail] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setVisible(!visible);
  };

  const okPress = () => {
    showModal();
    alert("ok");
  };

  const handleSubmit = (event) => {
    // showModal();
    console.log(`
      Email: ${username}
    `);
    Modal.confirm({
      title: "Confirm Add Sibling",
      icon: <ExclamationCircleOutlined />,
      content: "Do you want to add sibling?",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        okPress();
      },
      onCancel: () => {
        showModal();
      },
    });
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Verification</h1>

      <label>
        Enter Email/Mobile:
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <button className={"buttonStl"}>Submit</button>
    </form>
  );
}
