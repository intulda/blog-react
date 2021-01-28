import React from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import wrapper from '../../store/configureStore';
import { LOAD_MY_INFORMATION_REQUEST_ACTION } from '../../reducers/login';
import ProjectDetail from '../../component/project/ProjectDetail';
import { GET_PROJECT_REQUEST_ACTION } from '../../reducers/project';
import Layout from '../../component/layout/Layout';
import { ProjectSection } from '../project';

const Detail = () => {
  const { project } = useSelector((state) => state.project);

  return (
    <Layout>
      <ProjectSection>
        <ProjectDetail data={project} />
      </ProjectSection>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch(GET_PROJECT_REQUEST_ACTION({ id: context.params.id }));
  context.store.dispatch(LOAD_MY_INFORMATION_REQUEST_ACTION());
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Detail;
