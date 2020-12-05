import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout";
import styled from 'styled-components';
import kimbogeun from '../resource/images/kimbogeun.jpg';

const ProfileWrap = styled.div`
    width: 100%;
`

const PartWrap = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
`

const TitleWrap = styled.div`
    box-shadow: 0px -2px black;
    min-width: 100px;
    margin-right: 20px;
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
        padding: 10px;
    }
`

const ContentList = styled.li`
    display: flex;
    font-size: 0.9rem;
    
    &>p {
        padding: 10px;
    }
    
    &>p:first-child {
        font-weight: 300;
        min-width: 90px;
        flex: 1;
    }
    
    &>p:last-child {
        font-weight: 500;
        min-width: 100px;
        flex: 9;
    }
`

const Profile = () => {

    return (
        <Layout>
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
                    <TitleWrap>
                        <Title>학력사항</Title>
                    </TitleWrap>
                    <ContentWrap>
                        <ul>
                            <ContentList>
                                <p>2008.03 - 2012.02</p>
                                <p>인천효성고등학교</p>
                            </ContentList>
                            <ContentList>
                                <p>2012.03 - 2016.03</p>
                                <p>혜전대학교</p>
                            </ContentList>
                        </ul>
                    </ContentWrap>
                </PartWrap>
            </ProfileWrap>
        </Layout>
    )
}

export default Profile;