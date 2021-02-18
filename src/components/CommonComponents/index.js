import React from "react";
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
