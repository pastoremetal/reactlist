// @flow
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';

const AppWrapper = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <Fragment>
      <Layout />
    </Fragment>
  </ThemeProvider>
);

ReactDom.render(<AppWrapper />, global.document.getElementById('app'));
