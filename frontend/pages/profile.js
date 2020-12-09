import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout";
import styled, {keyframes} from 'styled-components';
import kimbogeun from '../resource/images/kimbogeun.jpg';

const ProfileWrap = styled.div`
    width: 100%;
`

const PartWrap = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 25px;
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

const Name = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
`

const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
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

const Profile = () => {

    return (
        <Layout>
            <PageTitle>
                Profile
            </PageTitle>
            <ProfileWrap>
                <PartWrap>
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
                <PartWrap>
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
                                <p>서울대학교</p>
                            </ContentList>
                        </ul>
                    </SubContentWrap>
                </PartWrap>
                <PartWrap>
                    <SubTitleWrap>
                        <Title>경력사항</Title>
                    </SubTitleWrap>
                    <SubContentWrap>
                        <ul>
                            <ContentList>
                                <p>2018.04 - 2020.03</p>
                                <p>(주)카카오 모빌리티</p>
                            </ContentList>
                        </ul>
                    </SubContentWrap>
                </PartWrap>
                <PartWrap>
                    <SubTitleWrap>
                        <Title>자격사항</Title>
                    </SubTitleWrap>
                    <SubContentWrap>
                        <ul>
                            <ContentList>
                                <p>2011</p>
                                <p>한식조리자격증</p>
                            </ContentList>
                        </ul>
                    </SubContentWrap>
                </PartWrap>
                <PartWrap>
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
                <PartWrap>
                    <SubTitleWrap>
                        <Title>주요 기술<br/><span style={{color: `#4ea1d3`, fontSize: `13px`}}>[관심분야]</span></Title>
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
                                <p>2014 - 2016</p>
                                <p>사회복무요원</p>
                            </ContentList>
                        </ul>
                    </ContentWrap>
                </PartWrap>
            </ProfileWrap>
        </Layout>
    )
}

export default Profile;