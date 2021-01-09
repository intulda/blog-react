import React from 'react';
import Layout from "../../component/layout/Layout";
import PostList from "../../component/post/PostList";
import {PostWrap} from "../post";
import PostWrite from "../../component/post/PostWrite";

const Write = () => {
    return (
        <Layout>
            <PostWrap>
                <PostWrite/>
            </PostWrap>
        </Layout>
    );
}

export default Write;