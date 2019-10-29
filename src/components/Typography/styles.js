import styled from 'styled-components';
import Theme from '../../theme';

export const StyledTypography = styled.div`
  font-size: ${Theme.fontSize}rem;
  color: ${Theme.textColor};
  font-weight: ${Theme.fontWeight};
  line-height: ${(props) => props.lineHeight};
`;
