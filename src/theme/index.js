// @flow
import theme from 'styled-theming';
import type { ThemeProps } from './types';
import colors from './colors';

export const backgroundColor = theme('mode', {
  light: colors.grey[200],
  dark: colors.grey.A400,
});
export const headerColor = theme('mode', {
  light: colors.orange.A700,
  dark: colors.grey[800],
});

const fontSize = theme('fontSize', {
  heading1: 6,
  heading2: 3.75,
  heading3: 3,
  heading4: 2.125,
  heading5: 1.5,
  heading6: 1.25,
  button: 0.875,
  body: 0.85,
});
const textColor = theme('mode', {
  light: theme('colorVariant', {
    normal: colors.grey.A400,
    dark: colors.grey['900'],
    light: colors.grey['50'],
  }),
  dark: theme('colorVariant', {
    normal: colors.grey['300'],
    dark: colors.grey['500'],
    light: colors.grey['50'],
  }),
});

const Theme: ThemeProps = {
  backgroundColor,
  headerColor,
  fontSize,
  textColor,
};

export default Theme;
