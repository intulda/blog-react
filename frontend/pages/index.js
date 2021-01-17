import React from 'react';
import styled, { keyframes } from 'styled-components';
import { END } from 'redux-saga';
import axios from 'axios';
import Layout from '../component/layout/Layout';
import wrapper from '../store/configureStore';
import { GET_ALL_HASHTAG_LIST_REQUEST_ACTION, GET_ALL_POST_LIST_REQUEST_ACTION } from '../reducers/post';
import { LOAD_MY_INFORMATION_REQUEST_ACTION } from '../reducers/login';

const MaskWrapper = keyframes`
    0% {
        transform: translateX(50%)
    }

    100% {
        transform: translateX(0)
    }
`;

const MaskContent = keyframes`
     0% {
        transform: translateX(-100%)
    }

    100% {
        transform: translateX(0)
    }
`;

const CdPulse = keyframes`
    0%,30.8% {
        opacity: 0
    }

    15.4%,46.2%,61.5%,70% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
`;

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 2em 0;
    overflow: hidden;
    animation-name: ${MaskWrapper};
    animation-duration: .5s;
    animation-delay: 1.1s;
    animation-fill-mode: backwards;
    
    &:before {
        content: '';
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background-color: #fff;
        animation: ${CdPulse} 1.3s .3s both;
    }
    
    &>div {
        animation-name: ${MaskContent};
        animation-duration: .5s;
        animation-delay: 1.1s;
        animation-fill-mode: backwards;
        text-align: center;
    }
    
    & h1 {
        font-size: 4.2rem;
        font-weight: bold;
        
    }
    
    & p {
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.4;
        margin: 1em 0;
        color: #717174;
    }
    
    @media only screen and (max-width: 768px) {
        & h1 {
            font-size: 2.4rem;
        }
        
        & p {
            font-size: 1rem;
        }
    }
`;

const LayoutChildrenWrap = styled.div`
    width: 100%;
    min-height: 100%;
    position: relative;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Index = () => (
  <>
    <Layout search>
      <LayoutChildrenWrap>
        <ContentWrapper>
          <div>
            <h1>Hello, Everybody!</h1>
            <p>김보근 포트폴리오 겸 블로그</p>
          </div>
        </ContentWrapper>
      </LayoutChildrenWrap>
      <section>
        project
      </section>
      <section>
        github
      </section>
    </Layout>
  </>
);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch(LOAD_MY_INFORMATION_REQUEST_ACTION());
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Index;
