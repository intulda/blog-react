import React from 'react';
import Layout from "../component/layout/Layout";
import styled from 'styled-components';
import PostCard from "../component/post/PostCard";
import Category from "../component/post/Category";

const PostWrap = styled.div`
    max-width: 1320px;
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
    }
`

const PostCardSection = styled.ul`
    width: 65%;  
    float: left;
    margin-bottom: 30px;
  
    @media only screen and (max-width: 600px) {
        width: 100%;      
    }
`

const Post = () => {
    const dummyData = [
        {
            seq: 1,
            title: 'DummyTest',
            category: 'Java',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-30',
            author: '김보근',
        },
        {
            seq: 2,
            title: 'DummyTest2',
            category: 'react',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-31',
            author: '김보근',
        },
        {
            seq: 3,
            title: 'DummyTest2',
            category: 'react',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-31',
            author: '김보근'
        },
        {
            seq: 4,
            title: 'DummyTest2',
            category: 'react',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-31',
            author: '김보근'
        },
        {
            seq: 5,
            title: 'DummyTest2',
            category: 'react',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-31',
            author: '김보근'
        },
        {
            seq: 6,
            title: 'DummyTest2',
            category: 'react',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-31',
            author: '김보근'
        },
        {
            seq: 7,
            title: 'DummyTest2',
            category: 'react',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-31',
            author: '김보근'
        },
        {
            seq: 8,
            title: 'DummyTest2',
            category: 'react',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
            images: [],
            regDate: '2020-12-31',
            author: '김보근'
        }
    ]
    return (
        <Layout>
            <PostWrap>
                <h1>Post</h1>
                <div>
                    <PostCardSection>
                        {
                            dummyData.map((v, index) => {
                                return (
                                    <li>
                                        <PostCard key={v.seq} data={v}/>
                                    </li>
                                )
                            })
                        }
                    </PostCardSection>
                    <Category/>
                </div>
            </PostWrap>
        </Layout>
    );
}

export default Post;