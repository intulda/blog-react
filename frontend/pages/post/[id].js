import React, { useCallback } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import moment from 'moment';
import wrapper from '../../store/configureStore';
import { LOAD_MY_INFORMATION_REQUEST_ACTION } from '../../reducers/login';
import { GET_POST_REQUEST_ACTION } from '../../reducers/post';
import Layout from '../../component/layout/Layout';
import { PostWrap } from '../post';

const PostDetailWrap = styled.div`
    
    &>h1 {
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 2px solid #777;
    }
    
    & .post__detail-author {
        display: flex;
        &>p {
            margin: 15px 0;
        }
        &>p:first-child {
            margin-right: 5px;
        }
    }
`;

const PostDetailContentWrap = styled.div`
    margin-bottom: 15px;
    &>div pre {
        background-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        line-height: 2;
    }
    
    &>div code {
      background-color: #ddd;
      border-radius: 2px;
      padding: 15px;
    }
    &>div ol, ul {
        padding-left: 40px;
        list-style: revert;
    }
`;

const PostFooterWrap = styled.div`
    margin-bottom: 100px;
    & .post__footer-history-back {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        
        &>.post__footer-button {
            width: 50%;
        }
        
        & a {
            border: 0;
            background-color: #546beb;
            color: white;
            padding: 10px;
            width: 100%;
            border-radius: 5px;
            opacity: 0.6;
        }
        & a:hover {
            opacity: 1;
        }
    }
`;

const CommentsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  
  & textarea {
    width: 100%;
    resize: none;
    border: 1px solid #2C2F33;
    border-radius: 5px;
    background: transparent;
    color: white;
    padding: 10px;
    margin-right: 5px;
  }
  & textarea:focus {
    outline: none;
    border-color: #546beb;
  }
  
  & button {
    width: 80px;
    background: #546beb;
    color: white;
    border: 0;
    border-radius: 5px;
    opacity: 0.6;
  }
  & button:hover {
    opacity: 1;
  }
`;

moment.locale('ko');

const PostDetail = () => {
  const router = useRouter();
  const { post } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.login);
  const { id } = router.query;

  const onClickReplySubmit = useCallback(() => {
    if (user.authentication === 'guest') {
      return alert('로그인 된 사용자만 댓글을 입력할 수 있습니다.');
    }
  }, [user]);

  return (
    <Layout>
      <Head>
        <title>{post.title}/{post.User.nickname}</title>
        <meta name="description" content={post.content} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content} />
        <meta property="og:image" content="https://bogeun.dev/favicon.ico" />
        <meta property="og:url" content={`https://bogeun.dev/post/${id}`} />
      </Head>
      <PostWrap>
        <PostDetailWrap>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <h1>{post.title}</h1>
          <div className="post__detail-author">
            <p>{moment(post.createdAt).format('YYYY.MM.DD')}</p>
            <p>{post.User.nickname}</p>
          </div>
          <PostDetailContentWrap>
            <div dangerouslySetInnerHTML={{ __html: post.contentHTML }} />
          </PostDetailContentWrap>
          <PostFooterWrap>
            <div>
              <p>댓글 {post.Comments.length}개</p>
              {
                user.id != null
                  && (
                  <div>
                    <CommentsWrap>
                      <textarea />
                      <button type="button" onClick={onClickReplySubmit}>입력</button>
                    </CommentsWrap>
                  </div>
                  )
              }
              <div>
                <ul>
                  {post.Comments.map((v) => (
                    <li key={v.id}>
                      <div>
                        <div>${v.author}</div>
                      </div>
                      <div>
                        <p>${v.content}</p>
                      </div>
                      <div>
                        <div>좋아요</div>
                        <div>답글 달기</div>
                        <div>${v.createdAt}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="post__footer-history-back">
                  <Link href="/post">
                    <a>
                      목록으로 돌아가기
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </PostFooterWrap>
        </PostDetailWrap>
      </PostWrap>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch(LOAD_MY_INFORMATION_REQUEST_ACTION());
  context.store.dispatch(GET_POST_REQUEST_ACTION({ id: context.params.id }));
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default PostDetail;
