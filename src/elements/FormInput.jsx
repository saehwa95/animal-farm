import React from "react";
import styled from "styled-components";

const Input = ({
  width,
  color,
  border,
  height,
  children,
  id,
  keyup,
  keypress,
}) => {
  const styles = {
    width,
    color,
    border,
    height,
  };
  return (
    <StInput
      {...styles}
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
  keyup: (e) => {},
  keypress: (e) => {},
};

const StInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  border-radius: 5px;
  padding: 0 5px;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;

export default Input;
