import React, { memo } from "react";

const Inputs = (props) => {
  /* type : type, label : label, placeholder : placeholder, name : name, onChange : onChange */
  const { type, label, placeholder, name, onChange } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}>
      {label}
    </input>
  );
};

export default memo(Inputs);
