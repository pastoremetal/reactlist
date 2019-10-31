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

function getMedia(prop, value) {
  if (typeof value === 'string') {
    return `${prop}: ${value};`;
  }
  if (typeof value === 'object') {
    return value.map((w, i) => {
      if (i === 0) {
        return `${prop}: ${w * 100}%`;
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
  box-sizing: border-box;
  max-width: ${(props) => getMaxWidth(props.maxWidth)};
  align-self: ${(props) => props.alignSelf || 'unset'};
  box-sizing: border-box;
  ${(props) => [
    getMedia('width', props.width),
    getMedia('margin-top', props.mt),
    getMedia('margin-bottom', props.mb),
    getMedia('padding-top', props.pt),
    getMedia('padding-bottom', props.pb),
    getMedia('padding-left', props.pl),
    getMedia('padding-right', props.pr),
  ].join('')}
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  max-width: ${(props) => getMaxWidth(props.maxWidth)};
  align-items: ${(props) => props.alignItems}};
  flex-wrap: ${(props) => props.wrap && 'wrap'};
  box-sizing: border-box;
  ${(props) => [
    getMedia('width', props.width),
    getMedia('margin-top', props.mt),
    getMedia('margin-bottom', props.mb),
    getMedia('padding-top', props.pt),
    getMedia('padding-bottom', props.pb),
    getMedia('padding-left', props.pl),
    getMedia('padding-right', props.pr),
  ].join('')}
`;
