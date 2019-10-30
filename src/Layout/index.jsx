// @flow
import React, { useState } from 'react';
import { DivHeader, Container } from './styles';
import { Flex, Box } from '../components/FlexBox';
import Typography from '../components/Typography';
import Address from '../pages/Address';
import Products from '../pages/Products';

export const Header = () => (
  <Flex tag={DivHeader}>
    <Box>
      <Typography color="light" size="heading5" weight="bold">
        ReactList
      </Typography>
    </Box>
  </Flex>
);

export const Layout = ({ uuid }: {uuid: string}) => {
  const [address, setAddress] = useState();
  return (
    <Flex tag={Container}>
      <Header />
      <Box maxWidth="xl" alignSelf="center" width={[1, 10 / 12]} pt="2rem" pb="2rem">
        {
          !address
            ? <Address uuid={uuid} setAddress={setAddress} />
            : <Products address={address} />
        }
      </Box>
    </Flex>
  );
};

export default Layout;
