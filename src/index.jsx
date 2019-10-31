// @flow
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'typeface-roboto';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from './Layout';
import graphqlClient from './services/graphqlClient';

const AppWrapper = () => (
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={{ mode: 'light' }}>
      <Fragment>
        <Layout />
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
);

ReactDom.render(<AppWrapper />, global.document.getElementById('app'));
