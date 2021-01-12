import React from 'react';
import styled, { keyframes } from 'styled-components';
import TiclyIntro from '../../resource/images/img_ticly_main.png';
import content1 from '../../resource/images/ticly_content/1.png';
import content2 from '../../resource/images/ticly_content/2.png';
import erp from '../../resource/images/ticly_content/erp.png';
import findArticle from '../../resource/images/ticly_content/img_ticly_findArticle_1.png';
import findArticle2 from '../../resource/images/ticly_content/img_ticly_findArticle_2.png';
import findArticle3 from '../../resource/images/ticly_content/img_ticly_findArticle_3.png';
import learningArticle from '../../resource/images/ticly_content/img_ticly_learning_1.png';
import learningArticle2 from '../../resource/images/ticly_content/img_ticly_learning_2.png';
import learningArticle3 from '../../resource/images/ticly_content/img_ticly_learning_3.png';
import learningArticle4 from '../../resource/images/ticly_content/img_ticly_learning_4.png';
import learningArticle5 from '../../resource/images/ticly_content/img_ticly_learning_5.png';

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
        padding: 0 10px;
    }
    
    & p {
        padding: 0 10px;
        line-height: 1.5;
        font-weight: 300;
    }
`;

const ProjectDetail = () => (
  <>
    <IntroSection>
      <IntroWrap>
        <IntroTitle>
          Ticly - 아티클 기반 <br />영어 학습 플랫폼 제작 프로젝트
        </IntroTitle>
        <TermWrap>
          <span>2020.07 - 2020.08</span>
        </TermWrap>
        <StackWrap>
          <ul>
            <li>Planning</li>
            <li>Database Design</li>
            <li>UI/UX Design</li>
            <li>Front-end/Back-end Development</li>
          </ul>
        </StackWrap>
        <Bar />
      </IntroWrap>
      <IntroImageWrap>
        <IntroImage src={TiclyIntro} />
        <Bar />
      </IntroImageWrap>
    </IntroSection>
    <RoleSection>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={1}>역할 및 기여도</SubTitle>
          <Role__ListWrap>
            <li>
              <div>기획(20%)</div>
              <div>아이디어 및 기능 제안, 기능 정의 담당</div>
            </li>
            <li>
              <div>UI/UX 설계(20%)</div>
              <div>화면 플로우 정의 기여</div>
            </li>
            <li>
              <div>데이터베이스 설계(70%)</div>
              <div>요구 조건 분석을 통해 Database 설계 담당</div>
            </li>
            <li>
              <div>Web Front-End / Back-End 개발(80%)</div>
              <div>프로젝트 구성원에 맞는 개발 세팅, 단어 학습하기, 문장 학습하기, 검색, 관리자 회원관리, 전체적인 관리 담당</div>
            </li>
          </Role__ListWrap>
        </ContentWrap>
      </BackgroundWrap>
    </RoleSection>
    <section>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={2}>프로젝트 진행 과정</SubTitle>
          <ChainCard>
            <ChainCardContent index={1}>
              <img src={content1} />
            </ChainCardContent>
            <ChainCardContent index={2}>
              <img src={content2} />
            </ChainCardContent>
            <ChainCardContent index={3}>
              <img src={TiclyIntro} />
            </ChainCardContent>
            <ChainCardContent index={4}>
              <img src={erp} />
            </ChainCardContent>
          </ChainCard>
          <ContentText>
            <h2>기능 정의</h2>
            <div>팀 구성원과의 해당 주제에 맞는 기능들을 정리하고 예상 일정을 구글 스프레드시트에 공유하여 대략적인 프로젝트 구조를 확립했습니다.</div>
          </ContentText>
          <ContentText>
            <h2>Notion을 활용한 프로젝트 관리</h2>
            <div>Task Board 및 Meeting Log 등의 Notion을 활용한 일정 및 프로젝트 관리를 진행했습니다.</div>
          </ContentText>
          <ContentText>
            <h2>서비스 개발</h2>
            <div>기획서와 시안을 바탕으로 DB 구축 및 개발을 진행했습니다.</div>
          </ContentText>
        </ContentWrap>
      </BackgroundWrap>
    </section>
    <section>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={3}>개발 환경</SubTitle>
          <ul>
            <SettingList>
              <p>Front-End</p>
              <p>HTML CSS Javascript Axios Bootstrap 4</p>
            </SettingList>
            <SettingList>
              <p>Back-End</p>
              <p>Spring boot Java Mybatis Oracle Maven Tomcat</p>
            </SettingList>
            <SettingList>
              <p>API</p>
              <p>Naver Login</p>
            </SettingList>
            <SettingList>
              <p>Tools</p>
              <p>Sorcetree Eclipse IntelliJ Inversion Notion</p>
            </SettingList>
            <SettingList>
              <p>VCS</p>
              <p>Git</p>
            </SettingList>
          </ul>
        </ContentWrap>
      </BackgroundWrap>
    </section>
    <section>
      <BackgroundWrap>
        <ContentWrap>
          <SubTitle number={4}>구현</SubTitle>
          <UIContentWrap>
            <UIContentList>
              <div>
                <img src={findArticle} />
                <h1>메인 페이지</h1>
                <p>
                  아티클 찾기 페이지는 학습 시작하기 전, 아티클을 탐색하는 페이지 입니다. 관심분야에 따라 필터링된 아티클을 확인할 수 있습니다. 로그인 전에는 모든 관심 분야를 보여줍니다. 새로운 섹션은 가장 최근에 등록된 아티클순으로, 필독 섹션은 [학습하기] 등록한 순으로 정렬되어 노출됩니다.
                </p>
              </div>
            </UIContentList>
            <UIContentList>
              <div>
                <img src={findArticle2} />
                <h1>메인 페이지 (로그인 후)</h1>
                <p>
                  로그인 후에는 설정한 관심분야에 맞게 탭이 설정 됩니다. 또한 공부를 진행하던 아티클의 최상단에 화성화 됩니다.
                </p>
              </div>
            </UIContentList>
            <UIContentList>
              <div>
                <img src={findArticle3} />
                <h1>검색</h1>
                <p>
                  아티클을 검색할 수 있는 페이지 입니다. 아무런 검색 결과가 없을 때는 해당 아티클들의 태그들을 클릭하여 손쉽게 찾을 수 있습니다.
                </p>
              </div>
            </UIContentList>
            <UIContentList>
              <div>
                <img src={learningArticle} />
                <h1>학습하기 미리보기</h1>
                <p>
                  미리 학습하려는 아티클의 원문을 보여주어 사용자가 배우고 싶은 내용인지 확인할 수 있습니다.
                </p>
              </div>
            </UIContentList>
            <UIContentList>
              <div>
                <img src={learningArticle2} />
                <h1>학습 대시보드</h1>
                <p>
                  현재 사용자의 진행중이거나 완료한 아티클들을 모아놓는 대시보드 페이지 입니다.
                </p>
              </div>
            </UIContentList>
            <UIContentList>
              <div>
                <img src={learningArticle3} />
                <h1>학습하기 (단어)</h1>
                <p>
                  카드를 클릭해 뒤집으면 단어의 뜻을 확인할 수 있습니다. 단어를 외운 후 양쪽 버튼을 눌러 다음 카드로 이동할 수 있습니다. 학습 완료라고 체크 할 때마다 단어 및 전체 학습 진도 퍼센트가 올라가도록 구현했습니다. 아티클을 기반으로 기본적인 단어셋이 구성되지만, 사용자가 추가적으로 단어 세트를 추가할 수 있습니다.
                </p>
              </div>
            </UIContentList>
            <UIContentList>
              <div>
                <img src={learningArticle4} />
                <h1>학습하기 (단어 완료)</h1>
                <p>
                  단어 세트를 학습 완료하게 되면 다음 단어세트로 넘어갈 수 있도록 구현하였습니다.
                </p>
              </div>
            </UIContentList>
            <UIContentList>
              <div>
                <img src={learningArticle5} />
                <h1>학습하기 (문장)</h1>
                <p>
                  문장 학습 탭은 사용자가 문장을 번역하는데 집중할 수 있도록 구성했습니다. 문장의 해석을 돕기 위한 번역기를 제공합니다. 또한, TTS(Text to Speech)기능을 통해 문장의 발음을 확인할 수 있습니다.
                </p>
              </div>
            </UIContentList>
          </UIContentWrap>
        </ContentWrap>
      </BackgroundWrap>
    </section>
  </>
);

export default ProjectDetail;
