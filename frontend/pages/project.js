import React from 'react';
import Layout from "../component/layout/Layout";
import styled from 'styled-components';
import kimbogeun from '../resource/images/kimbogeun.jpg';

const ImageWrap = styled.div`
    background-image: url(${kimbogeun});
`

const Project = () => {
    return (
        <Layout>
            <title>Project</title>
            <section>
                <ul>
                    <li>
                        <div>
                            <div>
                                <ImageWrap/>
                            </div>
                            <div>
                                <h1>김보근 프로젝트</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores at deserunt eveniet incidunt iste itaque, labore molestias nam neque nisi obcaecati pariatur quia quod sapiente sunt tempore tenetur voluptates?
                                </p>
                                <div>
                                    <p>기여도</p>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </Layout>
    )
};

export default Project;