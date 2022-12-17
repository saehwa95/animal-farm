import React from "react";
import styled from "styled-components";
const SmSecondaryBtn = ({
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
    <StSmSeconBtn {...styles} onClick={onClick}>
      {children}
    </StSmSeconBtn>
  );
};
// props 정리, props의 타입모듈.
SmSecondaryBtn.defaultProps = {
  bgColor: "#ffffff",
  color: "#000000",
  radius: "5px",
  onclick: () => {},
  padding: "8px 32px",
  border: "1px solid #cfcfcf",
};
const StSmSeconBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  cursor: pointer;
`;
export default SmSecondaryBtn;
