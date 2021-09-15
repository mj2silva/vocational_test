import { AppProps } from 'next/app';
import { React, ReactElement } from 'react';
import Layout from '../components/Layout';
// import Layout from '../components/layout/Layout';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
