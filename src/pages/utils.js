import { gql } from 'apollo-boost';
import graphqlClient from '../services/graphqlClient';

export const query = gql`
      {
          rates(currency: "USD") {
              currency
          }
      }
  `;
