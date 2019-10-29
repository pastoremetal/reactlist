// @flow

// import type { ThemeValue } from 'styled-theming';

// export type themeMode = (string, {}) => string;

export type breakpoints =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type fontSize =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "button"
  | "body";

// type fontSizeRules = {|
//   heading1: number,
//   heading2: number,
//   heading3: number,
//   heading4: number,
//   heading5: number,
//   heading6: number,
//   button: number,
//   body: number
// |};

export type textColor =
  | "normal"
  | "dark"
  | "light";

export type fontWeight =
  | "light"
  | "regular"
  | "medium"
  | "bold";
// type textColorRules = {|
//   normal: string,
//   dark: string,
//   light: string,
// |};

// export interface ThemeProps {
//   backgroundColor: themeMode,
//   headerColor: themeMode,
//   fontSize: fontSizeRules,
//   textColor: string | (props: Object) => string
// }
