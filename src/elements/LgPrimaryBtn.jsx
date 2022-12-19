import React from "react";
import styled from "styled-components";

const LgPrimaryBtn = ({
  onClick,
  disabled,
  bgColor,
  color,
  radius,
  children,
  border,
  width,
  height,
  fontSize,
}) => {
  const styles = {
    bgColor,
    color,
    radius,
    children,
    border,
    width,
    height,
    fontSize,
  };
  return (
    <StLgPrimaryBtn {...styles} onClick={onClick} disabled={disabled}>
      {children}
    </StLgPrimaryBtn>
  );
};
// props 정리, props의 타입모듈.
LgPrimaryBtn.defaultProps = {
  bgColor: "#000",
  color: "#fff",
  radius: "5px",
  onclick: () => {},
  disabled: {},
  border: "none",
  width: "300px",
  height: "55px",
};

const StLgPrimaryBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding : 0px;
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.7;
    background-color: #808080;
  }
`;

export default LgPrimaryBtn;