import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import MarkdownEditor from '../common/MarkdownEditor';
import customInput from '../hooks/customInput';
import { ADD_POST_REQUEST_ACTION } from '../../reducers/post';

const TitleWrap = styled.div`
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #bbc0c4;
    
    &>input {
        width: 100%;
        height: 100%;
        color: white;
        font-size: 2rem;
        background-color: transparent;
        outline: none;
        box-shadow: none;
        border: 0;
    }
`;
const ButtonWrap = styled.div`
    width: 100%;
    margin: 5px 0 20px 0;
    text-align: left;
    
    & button:focus {
        outline: none;
    }
    & button {
        border: 0;
        border-radius: 5px;
        font-size: 0.9rem;
        padding: 5px 10px;
        cursor: pointer;
    }
    &>button:first-child {
        background: white;
        color: #aaa;
        margin-right: 5px;
    }
    
    &>button:last-child {
        background: orange;
        color: white;
    }
`;

const TagWrap = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    
    & span {
        margin-right: 10px;
    }
    & input {
        width: 40%;
        border: 0;
        border-radius: 5px;
        padding: 5px;
        font-size: 0.9rem;
    }
    & input:focus {
        outline: none;
    }
`;

const PostWrite = () => {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [title, onChangeTitleHandler] = customInput('');
  const [tag, setTag] = useState([]);

  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
    const _html = document.querySelector('#gee').innerHTML;
    const _text = document.querySelector('#gee').innerText;
    const data = {
      title,
      content: _text,
      contentHTML: _html,
    };
    dispatch(ADD_POST_REQUEST_ACTION(data));
    const targetPage = '/post';
    Router.replace(targetPage);
  }, [title, tag]);

  const onChangeTagHandler = useCallback((e) => {
    const splitTag = e.target.value.split(',');
    setTag(splitTag);
  }, []);

  return (
    <form onSubmit={onSubmitHandler}>
      <TitleWrap>
        <input type="text" onChange={onChangeTitleHandler} placeholder="제목을 입력해주세요." />
      </TitleWrap>
      <div>
        <MarkdownEditor id="gee" />
        <TagWrap>
          <span>태그</span>
          <input type="text" onChange={onChangeTagHandler} placeholder="태그를 입력해주세요." />
        </TagWrap>
      </div>
      <ButtonWrap>
        <button type="button">취소</button>
        <button>글 작성</button>
      </ButtonWrap>
    </form>
  );
};

export default PostWrite;
