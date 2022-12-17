import React from "react";
import styled from "styled-components";

const LgPrimaryBtn = ({
  onClick,
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
    <StLgPrimaryBtn {...styles} onClick={onClick}>
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
  border: "none",
  width: "420px",
  height: "68px",
};

const StLgPrimaryBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size : 24px;
  padding : 0px;
  cursor: pointer;
`;

export default LgPrimaryBtn;