import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import {
  GET_ALL_HASHTAG_LIST_REQUEST_ACTION,
  GET_ALL_POST_LIST_REQUEST_ACTION,
  LIST_FILTER_ACTION,
} from '../../reducers/post';
import wrapper from '../../store/configureStore';

const CategoryWrap = styled.aside`
    width: 25%;
    padding: 30px 0;
    float: right;
    
    &>strong {
        color: #546beb;
        font-size: 1.3rem;
        font-weight: bold;
    }
    
    &>ul {
        margin: 15px 0;
    }
    
    @media only screen and (max-width: 600px) {
        display: none;   
    }
`;

const CategoryList = styled.li`
    font-size: 1rem;
    margin-bottom: 15px;
    cursor: pointer;
`;

const Category = ({ onListFilterHandler }) => {
  const { hashtags } = useSelector((state) => state.post);

  return (
    <CategoryWrap>
      <strong>Categories</strong>
      <ul onClick={onListFilterHandler}>
        <CategoryList data-id="">All ({hashtags[hashtags.length - 1]?.count})</CategoryList>
        {
          hashtags.map((v) => {
            if (v.name != 'totalCount') {
              return <CategoryList data-id={v.id} key={v.id}>{v.name} ({v.count})</CategoryList>;
            }
          })
        }
      </ul>
    </CategoryWrap>
  );
};

export default Category;
