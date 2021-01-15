import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import PostCard from './PostCard';
import Category from './Category';
import { GET_ALL_POST_LIST_REQUEST, GET_ALL_POST_LIST_REQUEST_ACTION } from '../../reducers/post';

const PostCardSection = styled.ul`
    width: 65%;  
    float: left;
    margin-bottom: 30px;
    
    &>li {
        cursor: pointer;
    }
  
    @media only screen and (max-width: 600px) {
        width: 100%;      
    }
`;

const PostList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const { isPostError, posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(GET_ALL_POST_LIST_REQUEST_ACTION());
  }, []);

  console.log(posts);
  return (
    <>
      <h1>
        POST
        {
          user.authentication === 'ADMIN'
          && (
          <Link href="/post/write">
            <a>
              글쓰기
            </a>
          </Link>
          )
        }
      </h1>
      <div>
        <PostCardSection>
          {
            posts.map((v) => (
              <li>
                <Link href={`/post/detail?post=${v.postSeq}`}>
                  <a>
                    <PostCard key={v.postSeq} data={v} />
                  </a>
                </Link>
              </li>
            ))
          }
        </PostCardSection>
        <Category />
      </div>
    </>
  );
};

export default PostList;
