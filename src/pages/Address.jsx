import React from 'react';
import { Flex, Box } from '../components/FlexBox';
import { InputForm } from '../components/Form';
import SuggestionList from '../components/Suggestion';
import { getSuggestion } from './utils';

const Address = () => (
  <Flex alignItems="center">
    <InputForm
      width={[1, 1, 1, 10 / 12]}
      label="Your address"
      name="address"
      suggestion={<SuggestionList />}
      onKeyUp={(val) => { getSuggestion({ address: val.target.value }); }}
    />
  </Flex>
);

export default Address;
