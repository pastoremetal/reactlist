import React from 'react';
import styled from 'styled-components';
import { Box } from './FlexBox';
import Typography from './Typography';
import { InputContainer } from '../pages/styles';


const StyledInput = styled.input`
  padding: 18.5px 14px;
  width: 100%;
  border: 0;
  height: 1.1875em;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
`;

export const InputForm = () => (
  <Box tag={InputContainer}>
    <Typography lineHeight="1" size="heading6" tag="label">Label</Typography>
    <StyledInput type="text" />
    <fieldset>
      <legend><span>​</span></legend>
    </fieldset>
  </Box>
);
