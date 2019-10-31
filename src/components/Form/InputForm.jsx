import React from 'react';
import type { InputFormProps } from './types';
import { Box } from '../FlexBox';
import { InputContainer, StyledInput } from './styles';
import Typography from '../Typography';

const InputForm = ({
  width, label, name, suggestion, onKeyUp,
}: InputFormProps) => (
  <Box width={width}>
    <InputContainer>
      <StyledInput type="text" name={name} id={name} onKeyUp={onKeyUp} autoComplete="off" />
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

export default InputForm;
