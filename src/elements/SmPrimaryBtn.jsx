import React from "react";
import styled from "styled-components";
const SmPrimaryBtn = ({
  onClick,
  bgColor,
  color,
  radius,
  children,
  height,
  padding,
  border,
}) => {
  const styles = {
    bgColor,
    color,
    radius,
    height,
    children,
    padding,
    border,
  };
  return (
    <StSmPriBtn {...styles} onClick={onClick}>
      {children}
    </StSmPriBtn>
  );
};
// props 정리, props의 타입모듈.
SmPrimaryBtn.defaultProps = {
  bgColor: "#000",
  color: "#fff",
  radius: "5px",
  onclick: () => {},
  padding: "8px 32px",
  border: "1px solid #cfcfcf",
  height: "55px"
};
const StSmPriBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  cursor: pointer;

`;
export default SmPrimaryBtn;
