import React from "react";

const Input = ({ name, label, value, onChange, type, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        // aria-describedby="emailHelp"
        className="form-control"
      />
      { error && <div className="alert alert-danger">{ error }</div> }
    </div>
  );
};

export default Input;
