import React from "react";

const btn = (props) => {
  /* label : button 이름, onClick : onClick, isDisabled : disabled, design : className */
  const { label, feature, design, isDisable } = props;
  return (
    <button className={design} onClick={onClick} disabled={isDisable}>
      {label}
    </button>
  );
};

export default btn;
