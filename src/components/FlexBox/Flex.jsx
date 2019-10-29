// @flow
import React from 'react';
import { StyledBox, StyledFlex } from './styles';
import type { FlexProps } from './types';

const Flex = ({
  tag,
  children,
  direction,
  maxWidth,
  width,
  mt,
  mb,
  pb,
  pt,
}: FlexProps) => (
  <StyledFlex
    as={tag}
    direction={direction}
    maxWidth={maxWidth}
    width={width}
    mt={mt}
    mb={mb}
    pt={pt}
    pb={pb}
  >
    {children}
  </StyledFlex>
);

Flex.defaultProps = {
  tag: 'div',
};

export default Flex;
