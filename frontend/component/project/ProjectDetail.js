import React from 'react';
import styled, { keyframes } from 'styled-components';
import { backendUrl } from '../../config/config';

const IntroAnimation = keyframes`
    0% {
        background-size: 0 100%;
        background-image: linear-gradient(transparent calc(100% - 0px), #ffffff 0px);
        top: 200px;
        opacity: 0;
    }

    100% {
        background-size: 100% 100%;
        background-image: linear-gradient(#1B1D21 calc(100% - 3px), rgb(255, 255, 255) 3px);
        top: 0px;
        opacity: 1;
    }
`;

const TermWrapAnimation = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 0.6;
    }
`;

const StackAnimation = keyframes`
    0% {
        top: 200px;
        opacity: 0;
    }
    
    100% {
        top: 0px;
        opacity: 1;
        transform: matrix(1, 0, 0, 1, 0, 0);
    }
`;

const IntroSection = styled.section`
    text-align: center;
    margin-top: 100px;
`;
const IntroWrap = styled.div`
    position: relative;
`;
const IntroTitle = styled.h1`
    position: relative;
    font-weight: 700;
    width: 100%;
    font-size: 45px;
    letter-spacing: -0.5px;
    background-repeat: no-repeat;
    transition: background-size 0.4s;
    background-size: 100% 100%;
    background-image: linear-gradient(#1B1D21 calc(100% - 3px), rgb(255, 255, 255) 3px);
    top: 0px;
    opacity: 1;
    display: inline;
    line-height: 1.5;
    animation: ${IntroAnimation} 0.4s;
    
`;

const TermWrap = styled.div`
    margin: 100px 35px;
    font-size: 17px;
    line-height: 1.8;
    margin-bottom: 20px;
    word-wrap: normal;
    word-break: break-all;
    letter-spacing: -0.05px;
    opacity: 0.6;
    animation: ${TermWrapAnimation} 0.4s;
`;

const StackWrap = styled.div`
    position: relative;
    animation: ${StackAnimation} 0.6s;
    
    & li {
        padding: 10px;
    }
`;

const IntroImageWrap = styled.div`
    width: 100%;
    overflow: hidden;
    max-width: calc(100% - 400px);
    min-width: 420px;
    margin: 0 auto;
`;

const Bar = styled.div`
    width: 1px;
    height: 80px;
    /* color: white; */
    background-color: white;
    position: relative;
    left: 50%;
    margin: 25px 0;
`;

const IntroImage = styled.img`
    width: 100%;
    max-width: 880px;
    box-shadow: rgba(23,25,29,0.5) 0 0 60px;
`;

const RoleSection = styled.section`
    width: 100%;
    background-color: #2C3035;
    color: white;
`;

const BackgroundWrap = styled.div`
    position: relative;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: #2C3035;
    color: white;
`;

const ContentWrap = styled.div`
    max-width: calc(880px + 80px);
    margin: 0 auto;
    padding: 50px 40px;
    position: relative;
`;

const SubTitle = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;
    color: #1B1D21;
    border: 1px solid white;
    padding: 10px;
    display: inline-block;
    border-radius: 6px;
    background: white;
    
    ${(props) => props.number
        && `
        &:before { 
            content: 'Part ${props.number}_';
        }`
}
    
    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Role__ListWrap = styled.ul`
    &>li {
        margin: 35px 0;
    }

    &>li>div:first-child {
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: 10px;
    }
    
    &>li>div:last-child {
        font-size: 1rem;
        font-weight: 200;
    }
`;

const ChainCard = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 25px;
    
`;

const ChainCardContent = styled.li`
    width: 30%;
    min-width: 260px;
    min-height: 180px;
    position: relative;
    margin: 10px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 20px 1px #0000008c;
    
    ${(props) => props.index
        && `&:before {
            content: '${props.index}';
        }`
}
    
    &:before {
        position: absolute;
        top: 10px;
        left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0.8rem;
        color: white;
        font-size: 0.8rem;
        border: 2px solid #2C3035;
        border-radius: 5px;
        background-color: #2C3035;
        padding: 2px;
        font-weight: bold;
    }
    
    &>img {
        width: 100%;
        height: 100%;
    }
`;

const ContentText = styled.div`
    margin: 35px 0;

    &>h2 {
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: 10px
    }
    
    &>h2:before {
        content: '#';
        margin-right: 5px;
    }
    
    &>div {
        font-size: 1rem;
        font-weight: 200;
        line-height: 1.5;
    }
`;

const SettingList = styled.li`
    margin-bottom: 15px;
    
    &>p:first-child {
        font-weight: bold;
        font-size: 1.4rem;
        margin-bottom: 15px;
        position: relative;
        overflow: hidden;
    }
    
    &>p:first-child:after {
        content: '';
        top: 50%;
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: white;
        margin-left: 5px;
        opacity: 0.6;
    }
    
    &>p:last-child {
        font-weight: 300;
    }
`;

const UIContentWrap = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    
    &>svg {
        font-size: 5rem;
        cursor: pointer;
    }

    &> li> div {
        width: 100%;
    }
    &> li img {
        width: inherit;
    }
`;

const UIContentList = styled.li`
    margin-bottom: 20px;
    
    & h1 { 
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        padding: 20px 0px 0 0;
    }
    
    & p {
        line-height: 1.5;
        font-weight: 300;
    }
`;

const ProjectDetail = ({ data }) => (
  <>
    <IntroSection>
      <IntroWrap>
        <IntroTitle>
          {data.title}
        </IntroTitle>
        <TermWrap>
          <span>{data.regDate}</span>
        </TermWrap>
        <StackWrap>
          <ul>
            {
              data.step.map((v) => <li key={v}>{v}</li>)
            }
          </ul>
        </StackWrap>
        <Bar />
      </IntroWrap>
      <IntroImageWrap>
        <IntroImage src={`${backendUrl}${data.images.main}`} />
        <Bar />
      </IntroImageWrap>
    </IntroSection>
    <RoleSection>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={1}>역할 및 기여도</SubTitle>
          <Role__ListWrap>
            {
                data.roles.map((v) => (
                  <li key={v.title}>
                    <div>{v.title}</div>
                    <div>{v.content}</div>
                  </li>
                ))
              }
          </Role__ListWrap>
        </ContentWrap>
      </BackgroundWrap>
    </RoleSection>
    <section>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={2}>프로젝트 진행 과정</SubTitle>
          <ChainCard>
            {
                data.images.step.map((v, index) => (
                  <ChainCardContent key={v.order} index={index + 1}>
                    <img src={`${backendUrl}${v.src}`} />
                  </ChainCardContent>
                ))
              }
          </ChainCard>
          {
              data.design.map((v, index) => (
                <ContentText key={index}>
                  <h2>{v.title}</h2>
                  <div>{v.content}</div>
                </ContentText>
              ))
            }
        </ContentWrap>
      </BackgroundWrap>
    </section>
    <section>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={3}>개발 환경</SubTitle>
          <ul>
            {
                data.environment.map((v, index) => (
                  <SettingList key={index}>
                    <p>{v.title}</p>
                    <p>{v.content}</p>
                  </SettingList>
                ))
              }
          </ul>
        </ContentWrap>
      </BackgroundWrap>
    </section>
    <section>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={4}>구현</SubTitle>
          <UIContentWrap>
            {
                data.images.implements.map((v, index) => (
                  <UIContentList>
                    <div>
                      <img src={`${backendUrl}${v.src}`} />
                      <h1>{v.title}</h1>
                      <p>{v.content}</p>
                    </div>
                  </UIContentList>
                ))
              }
          </UIContentWrap>
        </ContentWrap>
      </BackgroundWrap>
    </section>
  </>
);

export default ProjectDetail;
