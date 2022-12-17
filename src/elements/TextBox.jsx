import React from "react";
import styled from "styled-components";

const TextBox = ({
  onClick,
  bgColor,
  color,
  children,
  padding,
  border,
  width,
  height,
}) => {
  const styles = {
    bgColor,
    color,
    padding,
    border,
    width,
    height,
  };
  return (
    <StInputBox {...styles} onClick={onClick}>
      {children}
    </StInputBox>
  );
};
// props 정리, props의 타입모듈.
TextBox.defaultProps = {
  bgColor: "#F5F5F5",
  color: "#000",
  onclick: () => {},
  padding: "16px 100px",
  border: "none"
};

const StInputBox = styled.input`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color };
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  width: ${({ width }) => width };
  height: ${({ height }) => height };
  font-size : 24px;
  cursor: pointer;
`;

export default TextBox;