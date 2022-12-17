import React from "react";
import styled from "styled-components";

const Input = ({
  width,
  color,
  border,
  name,
  type,
  value,
  height,
  children,
  change,
  id,
  keyup,
  keypress,
}) => {
  const styles = {
    width,
    color,
    border,
    name,
    type,
    value,
    height,
  };
  return (
    <StInput
      {...styles}
      onChange={change}
      onKeyUp={keyup}
      onKeyPress={keypress}
      id={id}
    >
      {children}
    </StInput>
  );
};

Input.defaultProps = {
  width: "408px",
  height: "68px",
  color: "black",
  border: "1px solid #D6D6D6",
  type: "text",
  name: "",
  value: "",
  change: (e) => {},
  keyup: (e) => {},
  keypress: (e) => {},
};

const StInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  border-radius: 5px;
  type: ${({ type }) => type};
  name: ${({ name }) => name};
  value: ${({ value }) => value};
  padding: 0 5px;
  font-size : 24px;
  &:focus{
    outline: none;
  }
`;

export default Input;