import React from "react";
import styled from "styled-components";

const TextButton = ({
  children,
  color,
  padding,
  width,
  height,
  fontSize,
  onClick,
}) => {
  const styles = {
    color,
    padding,
    width,
    height,
    fontSize,
  };
  return (
    <StTextButton {...styles} onClick={onClick}>
      {children}
    </StTextButton>
  );
};
// props 정리, props의 타입모듈.
TextButton.defaultProps = {
  fontSize: "18px",
  color: "#000",
  onClick: () => {},
};

const StTextButton = styled.button`
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

export default TextButton;
