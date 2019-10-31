// @flow
import styled from 'styled-components';
import Theme from '../theme';

export const DivHeader = styled.header`
  width: 100%;
  background-color: ${Theme.headerColor};
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Theme.backgroundColor};
`;
