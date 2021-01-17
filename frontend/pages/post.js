import React from 'react';
import styled from 'styled-components';
import { END } from 'redux-saga';
import axios from 'axios';
import Layout from '../component/layout/Layout';
import PostList from '../component/post/PostList';
import wrapper from '../store/configureStore';
import { GET_ALL_HASHTAG_LIST_REQUEST_ACTION, GET_ALL_POST_LIST_REQUEST_ACTION } from '../reducers/post';
import { LOAD_MY_INFORMATION_REQUEST_ACTION } from '../reducers/login';

export const PostWrap = styled.div`
    max-width: 1100px;
    margin: 100px auto 0;
    padding: 60px 15px 0;
    
    &>h1 {
        width: 100%;
        position: relative;
        margin-bottom: 10px;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.4;
        border-bottom: 1px solid #777;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &>h1 a {
        background-color: transparent;
        box-shadow: none;
        border: 1px solid orange;
        color: white;
        height: 35px;
        padding: 5px 10px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

const Post = () => (
  <Layout>
    <PostWrap>
      <PostList />
    </PostWrap>
  </Layout>
);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  context.store.dispatch(LOAD_MY_INFORMATION_REQUEST_ACTION());
  context.store.dispatch(GET_ALL_POST_LIST_REQUEST_ACTION());
  context.store.dispatch(GET_ALL_HASHTAG_LIST_REQUEST_ACTION());
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Post;
