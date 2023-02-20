import React from "react";

export type InputType = {
  label: string;
  id: string;
  placeholder?: string;
};

const Input = (props: InputType) => {
  const { id, label, placeholder, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor={id}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="email"
        className="form-control rounded-pill text-lg"
        id={id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
};

export default Input;
