// @flow
import React from 'react';
import { StyledBox } from './styles';
import type { BoxProps } from './types';

const Box = ({
  tag,
  children,
  maxWidth,
  alignSelf,
  width,
  mt,
  mb,
  pb,
  pt,
  pl,
  pr,
}: BoxProps) => (
  <StyledBox
    as={tag}
    maxWidth={maxWidth}
    alignSelf={alignSelf}
    width={width}
    mt={mt}
    mb={mb}
    pt={pt}
    pb={pb}
    pl={pl}
    pr={pr}
  >
    {children}
  </StyledBox>
);

Box.defaultProps = {
  tag: 'div',
};

export default Box;
