import React from "react";
import styled from "styled-components";
const MainContainer = ({ width, display, margin, children }) => {
  const styles = {
    width,
    display,
    margin,
  };
  return <StMain {...styles}>
    {children}
    </StMain>;
};
// props 정리, props의 타입모듈.
MainContainer.defaultProps = {
  width: "1200px",
  margin: "0 auto",
};
const StMain = styled.main`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default MainContainer;