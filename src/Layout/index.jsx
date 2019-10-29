// @flow
import React from 'react';
import { DivHeader, Container } from './styles';
import { Flex, Box } from '../components/FlexBox';
import Typography from '../components/Typography';


export const Header = () => (
  <Flex tag={DivHeader}>
    <Typography color="light" size="heading5">
      ReactList
    </Typography>
  </Flex>
);

export const Layout = () => (
  <Flex tag={Container}>
    <Header />
  </Flex>
);

export default Layout;
