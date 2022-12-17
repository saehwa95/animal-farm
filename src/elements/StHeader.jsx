import React from "react";
import styled from "styled-components";
const StHeader = ({ width, display, padding, margin, children }) => {
  const styles = {
    width,
    display,
    padding,
    margin,
  };
  return <StHeaderDiv {...styles}>{children}</StHeaderDiv>;
};
// props 정리, props의 타입모듈.
StHeader.defaultProps = {
  width: "1200px",
  display: "flex",
  padding: "30px",
  margin: "0 auto",
};
const StHeaderDiv = styled.header`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  justify-content: space-between;
  cursor: pointer;
`;
export default StHeader;
