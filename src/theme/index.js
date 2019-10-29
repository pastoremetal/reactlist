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

const Theme: ThemeProps = {
  backgroundColor,
  headerColor,
};

export default Theme;
