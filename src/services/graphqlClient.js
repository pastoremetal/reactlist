// @flow
import ApolloClient from 'apollo-boost';

const graphqlClient = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

export default graphqlClient;
