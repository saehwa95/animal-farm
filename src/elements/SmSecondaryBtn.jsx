import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styled from "styled-components";
const SmSecondaryBtn = ({
  onClick,
  bgColor,
  color,
  radius,
  children,
  width,
  height,
  padding,
  border,
  type,
}) => {
  const styles = {
    bgColor,
    color,
    radius,
    width,
    height,
    children,
    padding,
    border,
  };
  return (
    <StSmSeconBtn {...styles} onClick={onClick} type="button">
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
  width: "75px",
  border: "1px solid #cfcfcf",
  height: "55px",
  type: "button",
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
