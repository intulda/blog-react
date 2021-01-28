import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import thumbnail from '../../resource/images/default-thumbnail.jpg';

const CardAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const ProjectCard = styled.li`
    border-radius: 6px;
    margin: 15px;
    position: relative;
    max-height: 380px;
    max-width: initial;
    overflow: hidden;
    background-color: #2C3035;
    padding-bottom: 50px;
    cursor: pointer;
    transition: all 0.2s;
    animation: ${CardAnimation} ${(props) => `1.${props.speed}s`};
    
    &:hover {
        box-shadow: rgba(23,25,29,0.5) 0 0 40px;
        transform: translateY(-4px);
    }
    
    &>div:first-child {
        padding-bottom: 20px;
        width: 100%;
    }
    
    @media only screen and (min-width: 768px) {
        max-width: 100%;
    }
    @media only screen and (min-width: 992px) {
        max-width: 100%;
    }
    @media only screen and (min-width: 1200px) {
        max-width: 100%;
    }
`;

const CardHeader = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &>img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
    }
`;

const CardContent = styled.div`
    padding: 15px 18px;
    width: 100%;
    
    &>h1 {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

const CardContentText = styled.div`
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-word;
    -webkit-box-orient: vertical;
    font-size: 13px;
    line-height: 1.5;
    padding-top: 6px;
`;

const CardFooter = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: inset 0px 1px rgb(30,30,30);
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
`;

const CardFooter__text = styled.p`
    font-size: 13px;
    position: absolute;
    left: 18px;
    top: 9px;
`;

const CardProgressBarWrap = styled.div`
    width: calc(100% - 72px);
    position: relative;
    height: 100%;
`;

const CardProgressBar__Back = styled.div`
    position: absolute;
    height: 8px;
    width: 100%;
    background-color: rgb(30, 30, 30);
    border-radius: 6px;
    left: 18px;
    top: 30px;
`;

const CardProgressBar__front = styled.div`
    position: absolute;
    height: 8px;
    border-radius: 6px;
    left: 18px;
    top: 30px;
    width: ${(props) => `${props.percent}%`};
    background-color: #257FF9;
    transition: 0.8s;
`;

const CardFooter__percent = styled.p`
    font-size: 13px;
    position: absolute;
    right: 18px;
    top: 25px;
    color: #257FF9;
`;

const Card = ({ data, speed }) => {
  const onErrorHandler = (e) => {
    e.target.src = thumbnail;
  };

  return (
    <ProjectCard speed={speed}>
      <Link
        href={`./project/${data.id}`}
      >
        <a>
          <div>
            <CardHeader>
              <img src={data.imageUrl} onError={onErrorHandler} />
            </CardHeader>
            <CardContent>
              <h1>{data.title}</h1>
              <CardContentText>
                {data.description}
              </CardContentText>
            </CardContent>
          </div>
          <CardFooter>
            <CardFooter__text>기여도</CardFooter__text>
            <CardProgressBarWrap>
              <CardProgressBar__Back />
              <CardProgressBar__front percent={data.percent} />
            </CardProgressBarWrap>
            <CardFooter__percent>{data.percent}%</CardFooter__percent>
          </CardFooter>
        </a>
      </Link>
    </ProjectCard>
  );
};

export default Card;
