import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { TypographyProps } from './types';
import { StyledTypography } from './styles';

const Typography = ({
  tag,
  children,
  size,
  color,
  weight,
  lineHeight,
}: TypographyProps) => (
  <ThemeProvider theme={{ fontSize: size, colorVariant: color, fontWeight: weight }}>
    <StyledTypography as={tag} lineHeight={lineHeight}>
      {children}
    </StyledTypography>
  </ThemeProvider>
);

Typography.defaultProps = {
  tag: 'p',
  size: 'body',
  color: 'normal',
  weight: 'regular',
};


export default Typography;
