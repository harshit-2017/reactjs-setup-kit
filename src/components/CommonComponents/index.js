import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
export function InputComponent(props) {
  const { label, name, type, value, onChange, error } = props;
  return (
    <label>
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error.errorField == name && error.errorMessage != "" && (
        <label style={{ color: "red" }}>{error.errorMessage}</label>
      )}
    </label>
  );
}

export function LoaderButtonComponent(props) {
  const { loading, text, className } = props;
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#FFF" }} spin />
  );
  return (
    <button className={`some-css-className ${className}`}>
      {loading ? <Spin indicator={antIcon} /> : text}
    </button>
  );
}
