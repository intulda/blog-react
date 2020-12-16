import React from 'react';
import Layout from "../component/layout/Layout";
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {useRouter} from'next/router';
import Card from "../component/project/ProjectCard";

const ProjectSection = styled.section`
    padding: 80px 20px 300px;
    
    &>h1 {
        width: 100%;
        position: relative;
        padding: 0 15px 10px;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.4;
    }
`
const ProjectCardWrap = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const Project = () => {
    const {data} = useSelector(state => state.project);
    const router = useRouter();

    return (
        <Layout>
            <ProjectSection>
                <h1>Project</h1>
                <ProjectCardWrap>
                {
                    Object.entries(router.query).length === 0
                        ? data.map((obj, index) => {
                            return <Card key={obj.id} data={obj} speed={index+1}/>
                        })
                        : <div>{router.query.id}</div>
                }
                </ProjectCardWrap>
            </ProjectSection>
        </Layout>
    )
};

export default Project;