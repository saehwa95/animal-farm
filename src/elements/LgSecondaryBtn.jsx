import React from "react";
import styled from "styled-components";

const LgSecondaryBtn = ({
  onClick,
  bgColor,
  color,
  radius,
  children,
  border,
  width,
  height,
}) => {
  const styles = {
    bgColor,
    color,
    radius,
    children,
    border,
    width,
    height,
  };
  return (
    <StLgSecondaryBtn {...styles} onClick={onClick}>
      {children}
    </StLgSecondaryBtn>
  );
};
// props 정리, props의 타입모듈.
LgSecondaryBtn.defaultProps = {
  bgColor: "#fff",
  color: "#000",
  radius: "5px",
  onclick: () => {},
  border: "1px solid #000",
  width: "300px",
  height: "55px",
};

const StLgSecondaryBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 0px;
  cursor: pointer;
`;

export default LgSecondaryBtn;