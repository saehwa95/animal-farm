import React from "react";
import styled from "styled-components";
const Wrapper = ({ width, display, padding, children }) => {
  const styles = {
    width,
    display,
    padding,
  };
  return <StWrapper {...styles}>
    {children}
    </StWrapper>;
};
// props 정리, props의 타입모듈.
Wrapper.defaultProps = {
  margin: "0 auto",
};
const StWrapper = styled.div`
  padding: ${({ padding }) => padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Wrapper;