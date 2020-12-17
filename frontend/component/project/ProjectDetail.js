import React from 'react';
import styled, {keyframes} from 'styled-components';
import TiclyIntro from '../../resource/images/img_ticly_main.png';

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
`

const TermWrapAnimation = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 0.6;
    }
`

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
`

const IntroSection = styled.section`
    text-align: center;
    margin-top: 100px;
`
const IntroWrap = styled.div`
    position: relative;
`
const IntroTitle = styled.h1`
    position: relative;
    font-weight: 700;
    width: 100%;
    font-size: 52px;
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
    
`

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
`

const StackWrap = styled.div`
    position: relative;
    animation: ${StackAnimation} 0.6s;
    
    & li {
        padding: 10px;
    }
`

const IntroImageWrap = styled.div`
    width: 100%;
    overflow: hidden;
    max-width: calc(100% - 400px);
    min-width: 420px;
    margin: 0 auto;
`

const Bar = styled.div`
    width: 1px;
    height: 80px;
    /* color: white; */
    background-color: white;
    position: relative;
    left: 50%;
    margin: 25px 0;
`

const IntroImage = styled.img`
    width: 100%;
    box-shadow: rgba(23,25,29,0.5) 0 0 60px;
`

const SettingSection = styled.section`
    position: absolute;
    left: 0;
    width: 100%;
`

const ProjectDetail = () => {
    return (
        <>
            <IntroSection>
                <IntroWrap>
                    <IntroTitle>
                        Ticly - 아티클 기반 <br/>영어 학습 플랫폼 제작 프로젝트
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
                    <Bar/>
                </IntroWrap>
                <IntroImageWrap>
                    <IntroImage src={TiclyIntro}/>
                    <Bar/>
                </IntroImageWrap>
            </IntroSection>
            <SettingSection>
                <div>
                    <div>
                        <h1>역할 및 기여도</h1>
                        <ul>
                            <li>
                                <div>기획(40%)</div>
                                <div>아이디어 및 기능 제안, 기능 정의 담당</div>
                            </li>
                            <li>
                                <div>UI/UX 설계(20%)</div>
                                <div>화면 플로우 정의</div>
                            </li>
                            <li>
                                <div>데이터베이스 설계(70%)</div>
                                <div>요구 조건 분석을 통해 Oracle로 Database 설계</div>
                            </li>
                            <li>
                                <div>Web Front-End / Back-End 개발(80%)</div>
                                <div>아티클 찾기, 단어 학습하기, 문장 학습하기, 검색, 관리자 회원관리, 전체적인 관리</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>프로젝트 진행 과정</h1>
                        <div>
                            <h2>#1 시나리오 작성 및 기능 정의</h2>
                            <div>아이디어 결정 후 러프한 사용 시나리오를 작성했습니다. 작성한 시나리오를 기반으로 아이디어를 실제로 구현하기 위한 최소한의 기능과 1개월 안에 구현할 수 있는 범위를 정의하고 업무를 분배했습니다.</div>
                        </div>
                        <div>
                            <h2>#2 디자인 시안 및 컴포넌트 Kit 제작</h2>
                            <div>효율적인 협업을 위해 컴포넌트 키트를 제작해 시안에 적용하고, 이를 기반으로 Bootstrap UI Kit를 커스텀한 CSS 라이브러리를 제작했습니다. 이후 커스텀한 라이브러리와 가이드를 팀원들에게 공유했습니다.</div>
                        </div>
                        <div>
                            <h2>#3 서비스 구현</h2>
                            <div>기획서와 시안을 바탕으로 DB 구축 및 서비스 개발을 진행했습니다.</div>
                        </div>
                    </div>
                    <div>
                        <h1>개발 환경</h1>
                    </div>
                </div>
            </SettingSection>
            <section>

            </section>
            <section>

            </section>
        </>
    )
}

export default ProjectDetail;