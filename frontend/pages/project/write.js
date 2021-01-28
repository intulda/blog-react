import React from 'react';
import Layout from '../../component/layout/Layout';
import { PostWrap } from '../post';
import PostWrite from '../../component/post/PostWrite';

const Write = () => (
  <Layout>
    <PostWrap>
      <h1>프로젝트 글쓰기</h1>
      <h3>메인 화면</h3>
      <section>
        <h2>메인</h2>
        <p>타이틀</p>
        <input type="text" />
        <p>기간</p>
        <div>
          <input type="text" /> ~ <input type="text" />
        </div>
        <p>
          단계
          <input type="button" value="+" />
        </p>
        <input type="text" />
        <p>메인 이미지</p>
        <input type="file" />
      </section>
      <section>
        <h2>역할 및 기여도</h2>
        <p>
          역할
          <input type="button" value="+" />
        </p>
        <input type="range" min="0" max="100" step="1" />
      </section>
      <section>
        <h2>프로젝트 진행 과정</h2>
        <p>
          과정 사진
          <input type="button" value="+" />
        </p>
        <input tytpe="file" />
        <p>
          과정
          <input type="button" value="+" />
        </p>
        <input type="text" />
      </section>
      <section>
        <h2>개발 환경</h2>
        <p>
          환경
          <input type="button" value="+" />
        </p>
        <div>
          <p>메뉴</p>
          <input type="text" />
          <p>설명</p>
          <input type="text" />
        </div>
      </section>
      <section>
        <h2>
          구현
          <input type="button" value="+" />
        </h2>
        <div>
          <p>구현사진</p>
          <input type="file" />
          <p>설명</p>
          <input type="text" />
        </div>
      </section>
    </PostWrap>
  </Layout>
);

export default Write;
