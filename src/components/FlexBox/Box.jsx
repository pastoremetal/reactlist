// @flow
import React from 'react';
import { StyledBox } from './styles';
import type { BoxProps } from './types';

const Box = ({
  tag,
  children,
}: BoxProps) => <StyledBox as={tag}>{children}</StyledBox>;

Box.defaultProps = {
  tag: 'div',
};

export default Box;
