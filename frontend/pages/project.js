import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import Layout from '../component/layout/Layout';
import Card from '../component/project/ProjectCard';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFORMATION_REQUEST_ACTION } from '../reducers/login';

export const ProjectSection = styled.section`
    padding-top: 60px;
    
    &>div>h1 {
        width: 100%;
        position: relative;
        padding: 0 15px 10px;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.4;
    }
`;
const ProjectWrap = styled.div`
    max-width: 1100px;
    margin-top: 100px;
    margin: 100px auto 0px;
`;

const ProjectCardWrap = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    
    @media only screen and (min-width: 660px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Project = () => {
  const { data } = useSelector((state) => state.project);

  return (
    <Layout>
      <ProjectSection>
        <ProjectWrap>
          <h1>Project</h1>
          <ProjectCardWrap>
            {
              data
              && data.map((obj, index) => <Card key={obj.id} data={obj} speed={index + 1} />)
            }
          </ProjectCardWrap>
        </ProjectWrap>
      </ProjectSection>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  context.store.dispatch(LOAD_MY_INFORMATION_REQUEST_ACTION());
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Project;
