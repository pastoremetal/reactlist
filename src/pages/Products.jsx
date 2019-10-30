import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { pocSearch } from '../graphql/poc';

const Products = ({ address }: {address: {}}) => {
  const { loading, error, data } = useQuery(pocSearch, {
    variables: {
      algorithm: "NEAREST",
      "lat": "-23.632919",
      "long": "-46.699453",
      "now": "2017-08-01T20:00:00.000Z"
    }
  });
  return (<div />);
}

export default Products;
