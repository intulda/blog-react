import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout";
import styled, {keyframes} from 'styled-components';
import kimbogeun from '../resource/images/kimbogeun.jpg';

const ProfileWrapAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(200px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const ProfileWrap = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 20px;
    
    &>h1 {
        width: 100%;
        position: relative;
        padding-bottom: 10px;
        margin-top: 100px;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.4;
    }
`

const PartWrap = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 25px;
    // padding: 0 15px 10px;
    animation: ${ProfileWrapAnimation} ${props => `0.${props.speed}s`};
`

const TitleWrap = styled.div`
    box-shadow: 0px -2px white;
    min-width: 100px;
    margin-right: 20px;
    padding: 10px;
`

const SubTitleWrap = styled.div`
    box-shadow: 0px -1px #ddd;
    min-width: 100px;
    padding: 10px;
`

const NoBorderSubTitleWrap = styled.div`
    min-width: 100px;
    padding: 10px;
`

const Name = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
`

const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
    
    & span {
        color: 4ea1d3,
        font-size: 13px;
    }
`

const SubName = styled.p`
    font-size: 0.8rem;
`

const ContentWrap = styled.div`
    box-shadow: 0px -2px #ddd;
    width: 100%;
    
    &>ul {
        padding: 10px 0;
    }
    
`

const SubContentWrap = styled.div`
    box-shadow: 0px -1px #ddd;
    width: 100%;
    padding: 0 15px;
    
    &>div {
        font-size: 0.8rem;
        line-height: 1.5;
    }
    
    &>div>p:nth-child(1) {
        font-weight: bold;
        padding: 10px 0;
    }
    
    &>div>p:nth-child(2) {
        padding: 0 10px 10px 10px;
    }
    
    &>div>p:nth-child(3) {
        padding: 0 10px 10px 10px;
        color: #4ea1d3;
    }
    
    &>ul {
        padding: 10px 0;
    }
`

const NoBorderSubContentWrap = styled.div`
    width: 100%;
    padding: 0 15px;
    
    &>div {
        font-size: 0.8rem;
        line-height: 1.5;
    }
    
    &>div>p:nth-child(1) {
        font-weight: bold;
        padding: 10px 0;
    }
    
    &>div>p:nth-child(2) {
        padding: 0 10px 10px 10px;
    }
    
    &>div>p:nth-child(3) {
        padding: 0 10px 10px 10px;
        color: #4ea1d3;
    }
    
    &>ul {
        padding: 10px 0;
        border-top: 1px solid white;
    }
`

const ContentList = styled.li`
    display: flex;
    font-size: 0.9rem;
    
    &>p {
        padding: 10px 0;
    }
    
    &>p:first-child {
        color: #bbb;
        font-weight: 300;
        min-width: 130px;
        flex: 1;
    }
    
    &>p:last-child {
        font-weight: 500;
        flex: 9;
    }
    
    @media only screen and (max-width: 786px) {
        & {
            flex-direction: column;
        }
    }
`

const PageTitle = styled.p`
    margin: 30px 0;
    font-size: 2rem;
    border FONT-WEIGHT: 100;
    box-shadow: 0;
    padding: 10px 0;
    display: inline-block;
    line-height: 2rem;
`

const InfoMessage = styled.div`
    flex: 1;
    margin-right: 20px;
    
    & p {
        color: #bbb;
        font-weight: 300;
        padding: 5px 0;
        white-space: nowrap;
    }
    
    & p:last-child {
        padding-bottom: 20px;
    }
`

const Content = styled.div`
    flex: 5;
    & h1 {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 10px;
    }
`

const TechStack = styled.ul`
    display: flex;
    flex-wrap: wrap;
    & li {
        font-size: 0.8rem;
        margin-right: 5px;
        margin-bottom: 10px;
        color: #4ea1d3;
    }
    
    & li:after {
        content: ',';
    }
    
    & li:last-child:after {
        content: '';
    }
`

const DevelopLogWrap = styled.ul`
    & li {
        margin-bottom: 10px;
    }
    
    & li:before {
        content: '-';
        padding-right: 5px;
    }
`

const MyInformationWrap = styled.div`
    &>div {
        font-size: 1rem;
    }
    
    &>div:first-child {
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    
    &>div:last-child {
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
`

const Profile = () => {

    return (
        <Layout>
            <ProfileWrap>
                <h1>Profile</h1>
                <PartWrap speed={1}>
                    <TitleWrap>
                        <Name>김보근</Name>
                        <SubName>Bogeun Kim</SubName>
                    </TitleWrap>
                    <ContentWrap>
                        <ul>
                            <ContentList>
                                <p>포트폴리오</p>
                                <p>bogeun.dev</p>
                            </ContentList>
                            <ContentList>
                                <p>연락처</p>
                                <p>010-7195-8196</p>
                            </ContentList>
                            <ContentList>
                                <p>이메일</p>
                                <p>intulda0104@gmail.com / intulda@naver.com</p>
                            </ContentList>
                            <ContentList>
                                <p>Github</p>
                                <p>https://github.com/intulda</p>
                            </ContentList>
                        </ul>
                    </ContentWrap>
                </PartWrap>
                <PartWrap speed={2}>
                    <SubTitleWrap>
                        <Title>학력사항</Title>
                    </SubTitleWrap>
                    <SubContentWrap>
                        <ul>
                            <ContentList>
                                <p>2008.03 - 2012.02</p>
                                <p>인천효성고등학교</p>
                            </ContentList>
                            <ContentList>
                                <p>2011.03 - 2016.03</p>
                                <p>혜전대학교 (중퇴)</p>
                            </ContentList>
                        </ul>
                    </SubContentWrap>
                </PartWrap>
                <PartWrap speed={3}>
                    <SubTitleWrap>
                        <Title>경력사항</Title>
                    </SubTitleWrap>
                    <SubContentWrap>
                        <ul>
                            <ContentList>
                                <p>2018.04 - 2020.03</p>
                                <p>(주)신나는 플랫폼</p>
                            </ContentList>
                        </ul>
                    </SubContentWrap>
                </PartWrap>
                <PartWrap speed={4}>
                    <SubTitleWrap>
                        <Title>병역사항</Title>
                    </SubTitleWrap>
                    <SubContentWrap>
                        <ul>
                            <ContentList>
                                <p>2014 - 2016</p>
                                <p>사회복무요원</p>
                            </ContentList>
                        </ul>
                    </SubContentWrap>
                </PartWrap>
                <PartWrap speed={6}>
                    <SubTitleWrap>
                        <Title>
                            주요 기술
                            <br/>
                            <span>
                                [관심분야]
                            </span>
                        </Title>
                    </SubTitleWrap>
                    <SubContentWrap>
                        <div>
                            <p>- Programming Language / Methodology</p>
                            <p>java(8), javascript(ES6), HTML5. CSS3</p>
                            <p>(Ruby, Python, Functional Programming)</p>
                        </div>
                        <div>
                            <p>- Framework / Library</p>
                            <p>Spring5(Framework, Boot), ReactJs, Redux, Redux-Saga, NextJs, JQuery, Bootstrap, AntD</p>
                            <p>(Ruby on Railes, Vue, NuxtJs, scss, P5.js)</p>
                        </div>
                        <div>
                            <p>- Server / Database</p>
                            <p>Tomcat, Oracle, Mysql, MariaDB, NodeJs</p>
                            <p>(Ngnix, Docker)</p>
                        </div>
                        <div>
                            <p>- Tools / DevOps</p>
                            <p>GitHub, Jenkins, maven, gradle, bash</p>
                            <p>(GitLab)</p>
                        </div>
                        <div>
                            <p>- Programming Language / Methodology</p>
                            <p>java(8), javascript(ES6), HTML5. CSS3</p>
                            <p>(Ruby, Python, Functional Programming)</p>
                        </div>
                        <div>
                            <p>- Environment</p>
                            <p>AWS, macOS, windows</p>
                            <p>(Docker container, Linux, Unix)</p>
                        </div>
                        <div>
                            <p>- Etc</p>
                            <p>Notion, Trello</p>
                            <p>(Jira)</p>
                        </div>
                    </SubContentWrap>
                </PartWrap>
                <PartWrap>
                    <TitleWrap>
                        <Title>경력기술서</Title>
                    </TitleWrap>
                    <ContentWrap>
                        <ul>
                            <ContentList>
                                <InfoMessage>
                                    <p>사원</p>
                                    <p>2018.04 - 2018.10</p>
                                    <p>컨버전스 사업팀 / 6개월</p>
                                </InfoMessage>
                                <Content>
                                    <h1>솜씨당 단독 파견</h1>
                                    <TechStack>
                                        <li>Spring framework</li>
                                        <li>java</li>
                                        <li>jsp</li>
                                        <li>mysql</li>
                                        <li>git</li>
                                        <li>aws</li>
                                        <li>tomcat8</li>
                                    </TechStack>
                                    <DevelopLogWrap>
                                        <li>관리자 페이지 개발</li>
                                        <li>모바일 웹 페이지 개발</li>
                                        <li>작가 페이지 개발</li>
                                        <li>정적 웹 페이지 개발</li>
                                        <li>개발 세팅</li>
                                    </DevelopLogWrap>
                                </Content>
                            </ContentList>
                        </ul>
                    </ContentWrap>
                </PartWrap>
                <PartWrap speed={8}>
                    <NoBorderSubTitleWrap>
                    </NoBorderSubTitleWrap>
                    <NoBorderSubContentWrap>
                        <ul>
                            <ContentList>
                                <InfoMessage>
                                    <p>사원</p>
                                    <p>2018.11 - 2019.03</p>
                                    <p>컨버전스 사업팀 / 4개월</p>
                                </InfoMessage>
                                <Content>
                                    <h1>서울대학교 UI 개선</h1>
                                    <TechStack>
                                        <li>Spring framework</li>
                                        <li>java</li>
                                        <li>jsp</li>
                                        <li>svn</li>
                                    </TechStack>
                                    <DevelopLogWrap>
                                        <li>학사 페이지 전반적인 UI개선</li>
                                        <li>신규 모바일 페이지 개발</li>
                                    </DevelopLogWrap>
                                </Content>
                            </ContentList>
                        </ul>
                    </NoBorderSubContentWrap>
                </PartWrap>
                <PartWrap speed={9}>
                    <NoBorderSubTitleWrap>
                    </NoBorderSubTitleWrap>
                    <NoBorderSubContentWrap>
                        <ul>
                            <ContentList>
                                <InfoMessage>
                                    <p>주임</p>
                                    <p>2018.11 - 2019.07</p>
                                    <p>R&D 개발팀 / 3개월</p>
                                </InfoMessage>
                                <Content>
                                    <h1>가톨릭 대학교 포털 메인 개발자</h1>
                                    <TechStack>
                                        <li>Spring boot</li>
                                        <li>java</li>
                                        <li>jsp</li>
                                        <li>javascript</li>
                                        <li>tomcat8</li>
                                        <li>jenkins</li>
                                        <li>git</li>
                                    </TechStack>
                                    <DevelopLogWrap>
                                        <li>Spring framework -> boot 전환 및 개선</li>
                                        <li>SSO 및 각종 API 개발</li>
                                        <li>관리자 페이지 개발</li>
                                        <li>포틀릿 개발</li>
                                        <li>개발 세팅</li>
                                    </DevelopLogWrap>
                                </Content>
                            </ContentList>
                        </ul>
                    </NoBorderSubContentWrap>
                </PartWrap>
                <PartWrap speed={10}>
                    <NoBorderSubTitleWrap>
                    </NoBorderSubTitleWrap>
                    <NoBorderSubContentWrap>
                        <ul>
                            <ContentList>
                                <InfoMessage>
                                    <p>주임</p>
                                    <p>2019.06 - 2020.03</p>
                                    <p>R&D 개발팀 / 9개월</p>
                                </InfoMessage>
                                <Content>
                                    <h1>부천대학교 포털 메인 개발자</h1>
                                    <TechStack>
                                        <li>Spring boot</li>
                                        <li>java</li>
                                        <li>jsp</li>
                                        <li>javascript</li>
                                        <li>resin4</li>
                                        <li>jenkins</li>
                                        <li>git</li>
                                    </TechStack>
                                    <DevelopLogWrap>
                                        <li>토마토 SSO 연결 및 각종 API 개발</li>
                                        <li>관리자 페이지 개발</li>
                                        <li>포틀릿 개발</li>
                                        <li>개발 세팅</li>
                                    </DevelopLogWrap>
                                </Content>
                            </ContentList>
                        </ul>
                    </NoBorderSubContentWrap>
                </PartWrap>
                <PartWrap speed={11}>
                    <NoBorderSubTitleWrap>
                    </NoBorderSubTitleWrap>
                    <NoBorderSubContentWrap>
                        <ul>
                            <ContentList>
                                <InfoMessage>
                                    <p>주임</p>
                                    <p>2019.12 - 2020.03</p>
                                    <p>R&D 개발팀 / 4개월</p>
                                </InfoMessage>
                                <Content>
                                    <h1>부천대학교 학사 고도화 시스템</h1>
                                    <TechStack>
                                        <li>웹 스퀘어3</li>
                                        <li>javascript</li>
                                        <li>java</li>
                                        <li>mybatis</li>
                                        <li>git</li>
                                    </TechStack>
                                    <DevelopLogWrap>
                                        <li>학사 페이지 개발</li>
                                    </DevelopLogWrap>
                                </Content>
                            </ContentList>
                        </ul>
                    </NoBorderSubContentWrap>
                </PartWrap>
                <PartWrap speed={12}>
                    <TitleWrap>
                        <Title>자기소개</Title>
                    </TitleWrap>
                    <ContentWrap>
                        <MyInformationWrap>
                            <div>
                                개발자로의 첫 걸음
                            </div>
                            <div>
                                <p>
                                    어렸을 적부터 답이 정해져 있지 않은 토론을 좋아했었습니다. 한가지의 문제를 두고 여러 가지 답을 도출해 낼 수 있다는 점에서 매우 흥미로웠습니다. 학창 시절에 ‘소프트웨어의 인터넷이 앞으로 얼마나 많은 영향을 미칠까’에 대한  토론을 하던 때가 있었는데, 토론을 진행하면서 앞으로는 인터넷에서 하지 못할 것이 없다는 주장에서서 의견을 주고 받고 개발이라는 분야에 처음 관심을 가지게 되었습니다. 개발도 마찬가지로 똑같은 주제를 두고 여러 가지 개발 방식과 수많은 경우의 수를 계속해서 생각하고 토론하며 팀원들과의 소통을 끊임없이 해야 한다는 점에서 비슷하다고 생각합니다. 이러한 끊임없이 생각하고 집중할 수 있는 능력은 누구보다도 잘할 수 있는 저의 강점이고 팀원과의 소통도 원활하게 할 수 있는며 어디서에서나 원하는 개발자라고 생각합니다.
                                </p>
                            </div>
                        </MyInformationWrap>
                    </ContentWrap>
                </PartWrap>
                <PartWrap speed={13}>
                    <NoBorderSubTitleWrap>
                        <Title>성격과 강점</Title>
                    </NoBorderSubTitleWrap>
                    <NoBorderSubContentWrap>
                        <MyInformationWrap>
                            <div>
                                성장하는 개발자
                            </div>
                            <div>
                                <p>
                                    회사를 다니면서 스터디를 하면서 신입 개발자 및 1~2년차 경력자분들과 함께 프로젝트랑 공부를 하면서 많이 느껴지는 부분이 있었습니다.  성실함과 끈기 그리고 끝없는 자기발전에 대한 생각입니다.
                                    처음 회사를 다니면서는 비전공자에 국비학원만 다녔던 때라 경쟁이전에 일단 같은 출반선에 서도록 노력을 해야겠다는 생각뿐이였습니다.  어찌하면 더 빠른 이해를 할 수 있을까? 어찌하면 더 나은 개발자가 될 수 있을까를 생각하면서 매일 같이 자신에게 문제를 주고 해결하고 미리 책을 통해서 공부하고 배운것들을 가지고 작은 프로젝트까지 겸하여 복습과 예습을 한 덕분에 마지막 프로젝트에서도 여러 타업체분들 혹은 퇴사자 분들에게 러브콜을 받아 왔고 인사평가에서 좋은 평가를 받을 수 있었습니다.
                                    이러한 노력은 성실함으로 나날히 발전할 수 있었으며 이 것을 바탕으로 어디에서든 좋은 영향을 끼칠 수 있는 개발자가 될 수 있다고 생각합니다.
                                </p>
                            </div>
                        </MyInformationWrap>
                    </NoBorderSubContentWrap>
                </PartWrap>
                <PartWrap speed={14}>
                    <NoBorderSubTitleWrap>
                        <Title>입사후 포부</Title>
                    </NoBorderSubTitleWrap>
                    <NoBorderSubContentWrap>
                        <MyInformationWrap>
                            <div>
                                욕심쟁이
                            </div>
                            <div>
                                <p>
                                    하고싶은 것들이 너무 많아 프론트뿐만 아니라 백엔드까지 전부 공부하여 혼자서도 모든 방면의 커버를 할 수 있는게 최종적인 목적 입니다. 개발자는 항상 발전해야한다고 생각합니다. 아무리 스타트가 늦었다고 하더라도 앞서 나간 개발자보다 욕심과 노력이 있다면 충분이 따라잡고 더욱 이 잘할 수 있다고 생각되고 그걸 이뤄서한  다른 개발자들 에게도 모범이 될 수는 있어  이러한 기술력을 통해 빠르게 변화하는 IT 계열에서도 회사의 기둥이 되어 흔들림없이 발전할 수 있도록 기여하겠습니다.
                                </p>
                            </div>
                        </MyInformationWrap>
                    </NoBorderSubContentWrap>
                </PartWrap>
            </ProfileWrap>
        </Layout>
    )
}

export default Profile;