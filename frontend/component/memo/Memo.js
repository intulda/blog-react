import React from 'react';
import styled from 'styled-components';
import {BsFolder, BsChevronRight} from "react-icons/bs";

const MemoWrap = styled.ul`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    
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
    
    &>li>span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:100%;
        font-size: 15px;
        padding: 0 8px 10px 0;
        box-shadow: 0 1px #aaa;
        color: black;
    }
`

const MemoTitle = styled.div`
    display: flex;
    width: calc(100% - 30px);
    box-shadow: 0 1px #aaa;
    padding-bottom: 10px;
    color: black;
    
    &>span:nth-child(2) {
        font-size: 0.8rem;
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
                    <span>30</span>
                    <BsChevronRight size="0.8rem" color="#aaa"/>
                </MemoTitle>
            </li>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <span>30</span>
                    <BsChevronRight size="0.8rem" color="#aaa"/>
                </MemoTitle>
            </li>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <span>30</span>
                    <BsChevronRight size="0.8rem" color="#aaa"/>
                </MemoTitle>
            </li>
            <li>
                <FolderIcon/>
                <MemoTitle>
                    <OverFlowDiv>리스트 입니다리스트 입니다리스트 입니다리스트 입니다리스트 입니다</OverFlowDiv>
                    <span>30</span>
                    <BsChevronRight size="0.8rem" color="#aaa"/>
                </MemoTitle>
            </li>
        </MemoWrap>
    )
}

export default Memo;