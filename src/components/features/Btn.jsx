import React, { memo } from "react";
import styled from "styled-components";

const Btn = (props) => {
  /* label : button 이름, onClick : onClick, isDisabled : disabled, design : className */
  const { label, onClick, isDisable, className } = props;
  return (
    <button className={className} onClick={onClick} disabled={isDisable}>
      {label}
    </button>
  );
};

export default memo(Btn);

const DelBtn = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 60px;
  padding: 8px;
  font-size: 0.8rem;
  color: #ffffff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 255);
  background-color: #e73737;
  box-shadow: 0 4px 9px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: none;
  border-radius: 7px;
  //justify-content: left;
  display: inline;

  :active {
    box-shadow: inset 2px 2px 2px 2px #2424243e;
  }
`;
