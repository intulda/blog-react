import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';
import DefaultCss from '../component/DefaultCss';

const Blog = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>코드몽키 블로그</title>
    </Head>
    <DefaultCss />
    <Component />
  </>
);

Blog.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(Blog));
