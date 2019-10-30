import React, { type Node } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '../FlexBox';
import { StyledUl } from './styles';

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  text-align: left;
  cursor: pointer;
  
  :hover {
    background-color: #ccc;
  }
`;

const BoxList = ({ children }: {children: Node}) => (
  <li>
    <Box tag={Button} pt="1.5rem" pb="1.5rem">{children}</Box>
  </li>
);

const SuggestionList = () => (
  <Flex tag={StyledUl} mt="-1px">
    <BoxList>Option 1</BoxList>
    <BoxList>Option 2</BoxList>
    <BoxList>Option 3</BoxList>
  </Flex>
);

export default SuggestionList;
