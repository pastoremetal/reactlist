// @flow
import type { Component, Node } from 'react';
import { breakpoints } from '../../theme/types';

export type BoxProps = {
  tag?: Component<any> | string,
  children?: Node,
  maxWidth?: breakpoints | string,
  alignSelf?: string,
  width?: string | Array<number>,
  mb?: string | Array<number>,
  mt?: string | Array<number>,
  pb?: string | Array<number>,
  pt?: string | Array<number>,
  pl?: string | Array<number>,
  pr?: string | Array<number>,
}

export type FlexProps = {
  tag?: Component<any> | string,
  children: Node,
  direction?: string,
  alignItems?: string,
  wrap?: boolean,
  maxWidth?: string,
  width?: string | Array<number>,
  mb?: string | Array<number>,
  mt?: string | Array<number>,
  pb?: string | Array<number>,
  pt?: string | Array<number>,
  pl?: string | Array<number>,
  pr?: string | Array<number>,
};
