import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_HASHTAG_LIST_REQUEST_ACTION, LIST_FILTER_ACTION } from '../../reducers/post';

const CategoryWrap = styled.aside`
    width: 25%;
    padding: 30px 0;
    float: right;
    
    &>strong {
        color: #2ac1bc;
        font-size: 1.3rem;
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
  const dispatch = useDispatch();
  const { hashtags } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(GET_ALL_HASHTAG_LIST_REQUEST_ACTION());
  }, []);

  return (
    <CategoryWrap>
      <strong>Categories</strong>
      <ul onClick={onListFilterHandler}>
        <CategoryList data-id="">All ({hashtags.reduce((acc, cur) => acc + cur.count, 0)})</CategoryList>
        {
          hashtags.map((v) => <CategoryList data-id={v.id} key={v.id}>{v.name} ({v.count})</CategoryList>)
        }
      </ul>
    </CategoryWrap>
  );
};

export default Category;
