import { autoBatchEnhancer } from "@reduxjs/toolkit";
import React from "react";
import styled from "styled-components";

const Box = ({
  children,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  width,
  height,
  margin,
  padding,
  gap,
  backgroundColor,
  borderTop,
  borderBottom,
  flexWrap,
}) => {
  const styles = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    width,
    height,
    margin,
    padding,
    gap,
    backgroundColor,
    borderTop,
    borderBottom,
    flexWrap
  };
  return <StCard {...styles}>{children}</StCard>;
};

Box.defaultProps = {
  display: "flex",
  padding: "0 16px",
};
const StCard = styled.div`
  display: ${({ display }) => display};
  flex-wrap: ${({flexWrap}) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  gap: ${({ gap }) => gap};
  border-top: ${({ borderTop }) => borderTop};
  border-bottom: ${({ borderBottom }) => borderBottom};
`;

export default Box;