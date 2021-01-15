import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_HASHTAG_LIST_REQUEST_ACTION } from '../../reducers/post';

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

const Category = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(GET_ALL_HASHTAG_LIST_REQUEST_ACTION());
  }, []);
  return (
    <CategoryWrap>
      <strong>Categories</strong>
      <ul>
        <CategoryList>1</CategoryList>
      </ul>
    </CategoryWrap>
  );
};

export default Category;
