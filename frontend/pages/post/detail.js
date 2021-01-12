import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { PostWrap } from '../post';
import Layout from '../../component/layout/Layout';

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
            border: 1px solid white;
            color: white;
            padding: 10px;
            width: 100%;
            border-radius: 5px;
        }
        & a:hover {
            color: orange;
        }
    }
`;

const Detail = () => {
  const router = useRouter();
  const [postDetail] = useSelector((state) => state.post.posts).filter((v) => router.query.post == v.postSeq);

  return (
    <Layout>
      <PostWrap>
        {
            Object.entries(router.query).length !== 0 && (
            <PostDetailWrap>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
              <h1>{postDetail.title}</h1>
              <div className="post__detail-author">
                <p>{postDetail.regDate}</p>
                <p>{postDetail.author}</p>
              </div>
              <PostDetailContentWrap>
                <div dangerouslySetInnerHTML={{ __html: postDetail.descriptionHtml }} />
              </PostDetailContentWrap>
              <PostFooterWrap>
                <div>
                  <p>댓글 {postDetail.comment.length}개</p>
                  <div>
                    <ul>
                      {postDetail.comment.map((v) => (
                        <li key={v.commentSeq}>
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
            )
        }
      </PostWrap>
    </Layout>
  );
};

export default Detail;
