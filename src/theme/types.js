// @flow

// export type themeMode = "dark" | "light";
export type themeMode = (string, {}) => string;

export interface ThemeProps {
  backgroundColor: themeMode,
  headerColor: themeMode
}
