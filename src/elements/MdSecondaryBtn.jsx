import React from "react";
import styled from "styled-components";
const MdSecondaryBtn = ({
  
  bgColor,
  color,
  radius,
  children,
  height,
  padding,
  border,
  width,
  onClick,
}) => {
  const styles = {
    bgColor,
    color,
    radius,
    height,
    children,
    padding,
    border,
    width,
  };
  return (
    <StMdSciBtn {...styles} onClick={onClick}>
      {children}
    </StMdSciBtn>
  );
};
// props 정리, props의 타입모듈.
MdSecondaryBtn.defaultProps = {
  bgColor: "#fff",
  color: "#000",
  radius: "5px",
  onclick: () => {},
  width: "150px",
  height: "55px",
  border: "1px solid #cfcfcf",
};
const StMdSciBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  cursor: pointer;
`;
export default MdSecondaryBtn;
