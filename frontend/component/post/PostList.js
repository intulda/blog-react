import React, {useCallback} from 'react';
import PostCard from "./PostCard";
import Category from "./Category";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {POST_WRITE_ACTION} from "../../reducers/post";
import Link from "next/link";

const PostCardSection = styled.ul`
    width: 65%;  
    float: left;
    margin-bottom: 30px;
  
    @media only screen and (max-width: 600px) {
        width: 100%;      
    }
`

const PostList = () => {

    const {user} = useSelector(state => state.login);
    const post = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onWriteHandler = useCallback(() => {
        dispatch(POST_WRITE_ACTION());
    }, []);
    return (
        <>
            <h1>
                Post
                {
                    user.authentication === 'admin' &&
                    <Link href="/post/write">
                        <a>
                            글쓰기
                        </a>
                    </Link>
                }
            </h1>
            <div>
                <PostCardSection>
                    {
                        post.posts.map((v, index) => {
                            return (
                                <li>
                                    <PostCard key={v.postSeq} data={v}/>
                                </li>
                            )
                        })
                    }
                </PostCardSection>
                <Category/>
            </div>
        </>
    )
}

export default PostList;