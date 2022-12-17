import React from "react";
import styled from "styled-components";

const TextBox = ({
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
  return <StInputBox {...styles}>{children}</StInputBox>;
};
// props 정리, props의 타입모듈.
TextBox.defaultProps = {
  bgColor: "#F5F5F5",
  color: "#000",
  onclick: () => {},
  width: "1000px",
  height: "300px",
  padding: "16px",
};

const StInputBox = styled.textarea`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: 18px;
  border: none;
  outline: none;
`;

export default TextBox;
