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
  onChange,
  onKeyUp,
  onKeyPress,
  value,
}) => {
  const styles = {
    bgColor,
    color,
    padding,
    border,
    width,
    height,
    onChange,
    onKeyUp,
    onKeyPress,
    value,
  };
  return (
    <StInputBox
      {...styles}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
    >
      {children}
    </StInputBox>
  );
};
// props 정리, props의 타입모듈.
TextBox.defaultProps = {
  bgColor: "#fff",
  color: "#000",
  padding: "16px",
  onChange: (e) => {},
  onKeyUp: (e) => {},
  onKeyPress: (e) => {},
  value: "",
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
  border-radius: 5px;
  outline: none;
  resize: none;
  value: ${({ value }) => value};
`;

export default TextBox;
