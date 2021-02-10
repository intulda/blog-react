import React, { useCallback } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Comment = ({ comment }) => {
  const onLikeHandler = useCallback(() => {

  }, []);

  const onReplyHandler = useCallback(() => {

  }, []);

  return (
    <li key={comment.id}>
      <div>
        <div>${comment.author}</div>
      </div>
      <div>
        <p>${comment.content}</p>
      </div>
      <div>
        <div onClick={onLikeHandler}>좋아요</div>
        <div onClick={onReplyHandler}>답글 달기</div>
        <div>${comment.createdAt}</div>
      </div>
    </li>
  );
};

Comment.propTypes = {
  id: Proptypes.number,
  author: Proptypes.string,
  content: Proptypes.string,
  createAt: Proptypes.string,
};

export default Comment;
