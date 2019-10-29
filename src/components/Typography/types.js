import type { Component, Node } from 'react';
import type { fontSize, textColor } from '../../theme/types';

export type TypographyProps = {
  tag?: Component<any> | string,
  children: Node,
  size?: fontSize,
  color?: textColor,
};
