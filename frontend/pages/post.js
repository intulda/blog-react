import React from 'react';
import Layout from "../component/layout/Layout";
import styled from 'styled-components';
import {useSelector} from "react-redux";
import PostList from "../component/post/PostList";

export const PostWrap = styled.div`
    max-width: 1100px;
    margin: 100px auto 0;
    padding: 60px 15px 0;
    
    &>h1 {
        width: 100%;
        position: relative;
        margin-bottom: 10px;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.4;
        border-bottom: 1px solid #777;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &>h1 a {
        background-color: transparent;
        box-shadow: none;
        border: 1px solid orange;
        color: white;
        height: 35px;
        padding: 5px 10px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`

const Post = () => {

    return (
        <Layout>
            <PostWrap>
                <PostList/>
            </PostWrap>
        </Layout>
    );
}

export default Post;