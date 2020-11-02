import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import DefaultCss from "../component/DefaultCss";
const Blog = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>코드몽키 블로그</title>
            </Head>
            <DefaultCss/>
            <Component/>
        </>
    )
}

Blog.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default Blog;