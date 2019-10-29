// @flow
import React from 'react';
import {DivHeader, Container} from "./styles";
import { Flex, Box } from '../components/FlexBox';


export const Header = () => (
  <Flex tag={DivHeader}>ReactList</Flex>
);

export const Layout = () => (
  <Flex tag={Container}>
    <Header />
  </Flex>
);

export default Layout;
