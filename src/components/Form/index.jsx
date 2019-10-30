import React from 'react';
import { Box } from '../FlexBox';
import Typography from '../Typography';
import { InputContainer, StyledInput } from './styles';
import type { InputFormProps } from './types';

export const InputForm = ({
  width, label, name, suggestion, onKeyUp,
}: InputFormProps) => (
  <Box width={width}>
    <InputContainer>
      <StyledInput type="text" name={name} id={name} onKeyUp={onKeyUp} />
      <fieldset>
        <legend>
          <span>
            <Typography lineHeight="1" tag="label" htmlFor={name}>{label}</Typography>
          </span>
        </legend>
      </fieldset>
    </InputContainer>
    {suggestion}
  </Box>
);
