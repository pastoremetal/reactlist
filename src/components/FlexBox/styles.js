// @flow

import styled from 'styled-components';
import Theme from '../../theme';

function getMaxWidth(maxWidth) {
  if (!maxWidth) {
    return null;
  }
  return maxWidth in Theme.breakpoints
    ? Theme.breakpoints[maxWidth]
    : maxWidth;
}

function getWidth(prop, value) {
  if (typeof value === 'string') {
    return `${prop}: ${value};`;
  }
  if (typeof value === 'object') {
    return value.map((w, i) => {
      if (i === 0) {
        return `value: ${w * 100}%`;
      }
      return (
        `@media (min-width: ${Object.values(Theme.breakpoints)[i]}) {
          ${prop}: ${w * 100}%;
        }`
      );
    }).join(';');
  }
  return null;
}

export const StyledBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${(props) => getMaxWidth(props.maxWidth)};
  align-self: ${(props) => props.alignSelf || 'unset'};
  ${(props) => [
    getWidth('width', props.width),
    getWidth('margin-top', props.mt),
    getWidth('margin-bottom', props.mb),
    getWidth('padding-top', props.pt),
    getWidth('padding-bottom', props.pb),
  ].join('')}
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  max-width: ${(props) => getMaxWidth(props.maxWidth)};
  ${(props) => [
    getWidth('width', props.width),
    getWidth('margin-top', props.mt),
    getWidth('margin-bottom', props.mb),
    getWidth('padding-top', props.pt),
    getWidth('padding-bottom', props.pb),
  ].join('')}
`;
