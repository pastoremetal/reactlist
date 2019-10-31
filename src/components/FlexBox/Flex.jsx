// @flow
import React from 'react';
import { StyledFlex } from './styles';
import type { FlexProps } from './types';

const Flex = ({
  tag,
  children,
  direction,
  alignItems,
  wrap,
  maxWidth,
  width,
  mt,
  mb,
  pb,
  pt,
  pl,
  pr,
}: FlexProps) => (
  <StyledFlex
    as={tag}
    direction={direction}
    alignItems={alignItems}
    wrap={wrap}
    maxWidth={maxWidth}
    width={width}
    mt={mt}
    mb={mb}
    pt={pt}
    pb={pb}
    pl={pl}
    pr={pr}
  >
    {children}
  </StyledFlex>
);

Flex.defaultProps = {
  tag: 'div',
};

export default Flex;
