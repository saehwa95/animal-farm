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
  bgColor: "#F5F5F5",
  color: "#000",
  padding: "16px",
  onChange: (e) => {},
  onKeyUp: (e) => {},
  onKeyPress: (e) => {},
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
`;

export default TextBox;
