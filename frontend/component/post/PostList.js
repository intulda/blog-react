import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { END } from 'redux-saga';
import PostCard from './PostCard';
import Category from './Category';
import { GET_ALL_POST_LIST_REQUEST_ACTION, LIST_FILTER_ACTION } from '../../reducers/post';
import wrapper from '../../store/configureStore';

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
  const { posts, dummyPosts, hasMorePosts, isPostLoading } = useSelector((state) => state.post);

  useEffect(() => {
    function onScroll() {
      if ((window.scrollY + document.documentElement.clientHeight) > document.documentElement.scrollHeight - 100) {
        if (hasMorePosts && !isPostLoading) {
          const lastId = posts[posts.length - 1]?.id;
          dispatch(GET_ALL_POST_LIST_REQUEST_ACTION(lastId));
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, isPostLoading, posts]);

  const onListFilterHandler = useCallback((e) => {
    const { id } = e.target.dataset;
    if (id) {
      const lists = posts.filter((o) => {
        const tags = o.Hashtags.map((v) => v.id == id);
        return tags.includes(true);
      });
      dispatch(LIST_FILTER_ACTION(lists));
      return;
    }
    dispatch(LIST_FILTER_ACTION(posts));
  }, [posts]);

  return (
    <>
      <h1>
        POST
        {
          user != null && user.authentication === 'ADMIN'
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
            dummyPosts.map((v) => (
              <li key={v.id}>
                <Link href={`/post/detail?id=${v.id}`}>
                  <a>
                    <PostCard data={v} />
                  </a>
                </Link>
              </li>
            ))
          }
        </PostCardSection>
        <Category onListFilterHandler={onListFilterHandler} />
      </div>
    </>
  );
};

export default PostList;
