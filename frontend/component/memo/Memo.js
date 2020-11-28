import React from 'react';
import styled from 'styled-components';
import {BsFolder, BsChevronRight} from "react-icons/bs";

const MemoWrap = styled.ul`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 70px;
    
    &>li {
        display: flex;
        align-items: center;
        padding: 5px;
        position: relative;
        cursor: pointer;
        border-radius: 5px;
    }
    
    &>li:hover {
        background-color: #ddd
    }
`

const MemoTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 30px);
    box-shadow: 0 1px #eee;
    padding-bottom: 10px;
    color: black;
    
    &>div {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        font-weight: bold;
        margin: 0 5px 0 10px;
        color: #aaa;
    }
`

const OverFlowDiv = styled.span`
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const FolderIcon = styled(BsFolder)`
    color: orange;
    margin: 0 10px 10px 0;
    font-size: 20px;
`

const Memo = () => {
    return (
        <MemoWrap>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <div>
                        <span>30</span>
                        <BsChevronRight size="0.8rem" color="#aaa"/>
                    </div>
                </MemoTitle>
            </li>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <div>
                        <span>30</span>
                        <BsChevronRight size="0.8rem" color="#aaa"/>
                    </div>
                </MemoTitle>
            </li>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <div>
                        <span>30</span>
                        <BsChevronRight size="0.8rem" color="#aaa"/>
                    </div>
                </MemoTitle>
            </li>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <div>
                        <span>30</span>
                        <BsChevronRight size="0.8rem" color="#aaa"/>
                    </div>
                </MemoTitle>
            </li>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <div>
                        <span>30</span>
                        <BsChevronRight size="0.8rem" color="#aaa"/>
                    </div>
                </MemoTitle>
            </li>

        </MemoWrap>
    )
}

export default Memo;