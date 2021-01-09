import React from 'react';
import styled from 'styled-components';

const PostCardWrap = styled.div`
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
`

const PostContentAuthor = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 300;
    
    &>p:nth-of-type(1) {
        margin-right: 10px;
    }
`

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
        background-color: #257FF9;
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
`

const PostContent = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.8;
`

const PostCard = (props) => {

    return (
        <PostCardWrap>
            <PostContentAuthor>
                <p>{props.data.regDate}</p>
                <p>{props.data.author}</p>
            </PostContentAuthor>
            <PostContentWrap>
                {
                    props.data.tags.map((v, index) => {
                        return <p key={index}>{v}</p>
                    })
                }
            </PostContentWrap>
            <PostContentWrap>
                <h1>{props.data.title}</h1>
                <div>
                    <PostContent>{props.data.description}</PostContent>
                </div>
            </PostContentWrap>
        </PostCardWrap>
    )
};

export default PostCard;