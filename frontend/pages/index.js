import React from 'react';
import styled, {keyframes} from 'styled-components';
import Layout from '../component/layout/Layout';

const OpacityAnimation = keyframes` 
    0%, 100% {opacity:0;}
    50% {opacity:1;}
`

const ChangeAnimation = keyframes`
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
`;

const LayoutChildrenWrap = styled.div`
    width: 100%;
    min-height: 100%;
    position: relative;
    
`

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow:hidden;
    font-size: 2rem;
    line-height: 40px;
    color: #ecf0f1;
    
    &:before {
      content: '[';
      left: 0;
    }

    &:after {
      content: ']';
      position: absolute;
      right: 0;
    }
    
    &:after, &:before {
      position: absolute;
      top: 0;
      
      color: #4ea1d3;
      font-size: 42px;
      line-height: 40px;
     
      animation-name: ${OpacityAnimation};
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
`

const ContentContainer = styled.div`
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 20px;
`

const ContentText = styled.p`
    display: inline;
    float: left;
    margin: 0;
`

const ContentList = styled.ul`
    margin-top: 0;
    padding-left: 120px;
    text-align: left;
    list-style: none;

    animation-name: ${ChangeAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    
    & li {
        line-height:40px;
        margin:0;
    }
`

const MessageWrap = styled.div`
    line-height: normal;
    padding: 10px 0;
`

const PointSpan = styled.span`
    color: #4ea1d3;
`

const Index = () => {
    return (
        <>
            <Layout search={true}>
                <LayoutChildrenWrap>
                    <Content>
                        <ContentContainer>
                            <ContentText>
                                Hello,
                            </ContentText>

                            <ContentList>
                                <li>World!</li>
                                <li>Code!</li>
                                <li>User!</li>
                                <li>Everybody!</li>
                            </ContentList>
                        </ContentContainer>
                        <MessageWrap>
                            I'm <PointSpan>BoGeun.Kim</PointSpan>
                            <p>
                                My future is to make better <PointSpan>CODE</PointSpan>
                            </p>
                        </MessageWrap>
                    </Content>
                </LayoutChildrenWrap>
                <section>
                    project
                </section>
                <section>
                    github
                </section>
            </Layout>
        </>
    )
}

export default Index;