import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const PostCardWrap = styled.div`
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
`;

const PostContentAuthor = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 300;
    
    &>p:nth-of-type(1) {
        margin-right: 10px;
    }
`;

const PostContentWrap = styled.div`
    line-height: 1.5;
    word-break: break-word;
    
    &>h1 {
        font-size: 2rem;
        font-weight: bold;
    }
    
    &>p {
        display: inline-block;
        padding: 1px 5px;
        font-size: 0.9rem;
        background-color: #546beb;
        border-radius: 5px;
        position: relative;
        margin-right: 5px;
    }
    
    &>p:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

const PostContent = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.8;
`;
moment.locale('ko');
const PostCard = ({ data }) => (
  <PostCardWrap>
    <PostContentAuthor>
      <p>{moment(data.createdAt).format('YYYY-MM-DD')} {moment(data.createdAt, 'YYYYMMDD').fromNow()}</p>
      <p>{data.User.nickname}</p>
    </PostContentAuthor>
    <PostContentWrap>
      {
          data.Hashtags.map((v) => <p key={v.id}># {v.name}</p>)
        }
    </PostContentWrap>
    <PostContentWrap>
      <h1>{data.title}</h1>
      <div>
        <PostContent>{data.content}</PostContent>
      </div>
    </PostContentWrap>
  </PostCardWrap>
);

export default PostCard;
