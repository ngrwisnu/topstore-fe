import React from "react";

export type InputType = {
  id: string;
  type: "text" | "email" | "number" | "password";
  placeholder?: string;
  value?: string;
  onchange?: (e: any) => any;
  required?: boolean;
};

const InputField = (props: InputType) => {
  const { id, type, placeholder, value, onchange, ...nativeProps } = props;
  return (
    <>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange!(e.target.value)}
        {...nativeProps}
      />
    </>
  );
};

export default InputField;
