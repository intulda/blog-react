import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { PostWrap } from '../post';
import Layout from '../../component/layout/Layout';
import { GET_POST_REQUEST_ACTION } from '../../reducers/post';

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

const Detail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(GET_POST_REQUEST_ACTION({ id: router.query.id }));
  }, []);

  console.log(post);

  return (
    <Layout>
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
            <p>{post.createdAt}</p>
            <p>{post.User.nickname}</p>
          </div>
          <PostDetailContentWrap>
            <div dangerouslySetInnerHTML={{ __html: post.contentHTML }} />
          </PostDetailContentWrap>
          <PostFooterWrap>
            <div>
              <p>댓글 {post.Comments.length}개</p>
              <div>
                <CommentsWrap>
                  <textarea />
                  <button type="button">입력</button>
                </CommentsWrap>
              </div>
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
                        <div>${v.regDate}</div>
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
export default Detail;
