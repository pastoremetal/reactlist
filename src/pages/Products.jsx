// @flow
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Flex } from '../components/FlexBox';
import { pocSearch } from '../graphql/poc';
import ProductCard from '../components/ProductCard';

const now = new Date().toISOString();

const Products = ({ address }: {address: {}}) => {
  const useAddress = process.env.IS_MOCK === '0'
    ? address
    : {
      lat: '-23.632919',
      long: '-46.699453',
    };
  const { loading, data } = useQuery(pocSearch, {
    variables: {
      ...useAddress,
      algorithm: 'NEAREST',
      now,
    },
  });

  return (
    <Flex alignItems="center" direction="row" wrap>
      {!loading && (
        data.pocSearch[0].products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))
      )}
    </Flex>
  );
};

export default Products;
