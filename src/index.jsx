// @flow
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import uuidv4 from 'uuid/v4';
import 'typeface-roboto';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from './Layout';
import graphqlClient from './services/graphqlClient';

const uuid = uuidv4();

const AppWrapper = () => (
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={{ mode: 'light' }}>
      <Fragment>
        <Layout uuid={uuid} />
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
);

ReactDom.render(<AppWrapper />, global.document.getElementById('app'));
