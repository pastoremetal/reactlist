// @flow
import React from 'react';
import { StyledFlex } from './styles';
import type { FlexProps } from './types';

const Flex = ({
  tag,
  children,
}: FlexProps) => <StyledFlex as={tag}>{children}</StyledFlex>;

Flex.defaultProps = {
  tag: 'div',
};

export default Flex;
