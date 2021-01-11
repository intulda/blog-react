import React from 'react';
import Layout from '../../component/layout/Layout';
import { PostWrap } from '../post';
import PostWrite from '../../component/post/PostWrite';

const Write = () => (
  <Layout>
    <PostWrap>
      <PostWrite />
    </PostWrap>
  </Layout>
);

export default Write;
