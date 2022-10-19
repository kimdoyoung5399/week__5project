import React, { memo } from "react";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-readius: 4px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-readius: 12px;
  `,
};

const Btn = ({ size, disabled, children }) => {
  const sizeStyle = SIZES[size];

  return (
    <StyleBtn sizeStyle={sizeStyle} disabled={disabled}>
      {children}
    </StyleBtn>
  );
};

const StyleBtn = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  padding: var(--button-padding, 12px 16px);
  height: 2rem;
  width: 30rem;
  border-radius: var(--button-radius, 5px);
  color: var(--button-color, black);
  background: var(--button-bg-color, #b7c2fa);

  &:active {
    box-shadow: inset 0rem -0.5rem 1rem #b7c2fa;
  }
  &:hover,
  &:focus {
    background: rgb(103, 124, 241);
    color: white;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default memo(Btn);
