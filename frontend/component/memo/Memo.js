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
    
    &>li>span>span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    &>li>span>span {
        display: flex;
        font-size: 0.8rem;
        align-items: center;
    }
    
    &>li>div {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 0.8rem;
    }
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
                <span>
                    <span>리스트 입니다</span>
                    <span>30</span>
                </span>
                <div>
                    <BsChevronRight/>
                </div>
            </li>
            <li>
                <FolderIcon/>
                <span>리스트 입니다</span>
            </li>
            <li>
                <FolderIcon/>
                <span>리스트 입니다</span>
            </li>
            <li>
                <FolderIcon/>
                <span>리스트 입니다</span>
            </li>
            <li>
                <FolderIcon/>
                <span>리스트 입니다</span>
            </li>
            <li>
                <FolderIcon/>
                <span>리스트 입니다</span>
            </li>
            <li>
                <FolderIcon/>
                <span>리스트 입니다</span>
            </li>
        </MemoWrap>
    )
}

export default Memo;