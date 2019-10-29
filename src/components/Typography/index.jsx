import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { TypographyProps } from './types';
import { StyledTypography } from './styles';

const Typography = ({
  tag,
  children,
  size,
  color,
}: TypographyProps) => (
  <ThemeProvider theme={{ fontSize: size, colorVariant: color }}>
    <StyledTypography size={size} as={tag} color={color}>
      {children}
    </StyledTypography>
  </ThemeProvider>
);

Typography.defaultProps = {
  tag: 'p',
  size: 'body',
  color: 'normal',
};


export default Typography;
