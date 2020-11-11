import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineFolder} from 'react-icons/ai';
import {FINDER_CLOSE_ACTION} from "../../reducers/finder";

const FinderWrap = styled.div`
    width: 60%;
    height: 70%;
    position: relative;
    margin: 0 auto;
    border-radius: 5px;
`

const FinderHeaderWrap = styled.div`
    width: 100%;
    height: 30px;
    background-color: rgba(222, 222, 222, 1);
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px rgba(178, 178, 178, 1);
`

const FinderContentsWrap = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    background-color: white;
    border-radius: 0 0 5px 5px;
`

const FinderMenuWrap = styled.div`
    width: 15%;
    height: 100%;
    background-color: rgba(222, 222, 222, 0.9);
    border-radius: 0 0 0 5px;
    border-right: 1px solid rgba(198, 197, 200, 1);
    box-sizing: border-box;
`

const FinderContentListWrap = styled.div`
    width: 20%;
    height: 100%;
    border-right: 1px solid rgba(230, 230, 230, 1);
    box-sizing: border-box;
`

const FinderContentWrap = styled.div`
    width: 65%;
    height: 100%;
`

const FinderHeaderStateWrap = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`
const FinderHeaderState = styled.li`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 0 1px black;
    background-color: ${(props) => props.theme};
    margin: 0 5px;
    z-index: 1;
    &:nth-child(1) {
        margin-left: 10px;    
    }
`

const FinderTitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
`

const MenuFont = styled.div`
    font-size: 0.7rem;
    color: rgb(95, 94, 97);
    padding: 10px;
`

const MenuListLi = styled.li`
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    color: rgb(47, 47, 51);
    padding: 0 15px;
    position: relative;
   
    &:focus {
        outline: none;
        background-color: rgba(198, 198, 203, 1);
    }
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
    }
`

const headerState = {
    default: `rgba(255, 85, 79, 1)`,
    yellow: `rgba(255, 185, 42, 1)`,
    green: `rgba(37, 201, 58, 1)`
}

const Finder = (props) => {

    const {contents} = useSelector((state) => state.finder);
    const dispatch = useDispatch();

    const onClickActiveHandler = useCallback((e) => {
        console.log(e.target);
        e.target.focus();
    }, []);

    const onFinderCloseHandler = useCallback((e) => {
        dispatch(FINDER_CLOSE_ACTION());
    }, []);

    return (
        <FinderWrap>
            <FinderHeaderWrap>
                <div>
                    <FinderHeaderStateWrap>
                        <FinderHeaderState theme={headerState.default} onClick={onFinderCloseHandler}/>
                        <FinderHeaderState theme={headerState.yellow}/>
                        <FinderHeaderState theme={headerState.green}/>
                    </FinderHeaderStateWrap>
                </div>
                <FinderTitleWrap>
                    <span>{props.name}</span>
                </FinderTitleWrap>
            </FinderHeaderWrap>
            <FinderContentsWrap>
                <FinderMenuWrap>
                    <MenuFont>
                        <span>즐겨찾기</span>
                    </MenuFont>
                    <ul>
                        {contents.map((x) => {
                            return <MenuListLi onClick={onClickActiveHandler}>
                                    <AiOutlineFolder size="20" color="#767676" style={{marginBottom:`5px`, marginRight: `2px`}}/>
                                    {x.name}
                                </MenuListLi>
                        })}
                    </ul>
                </FinderMenuWrap>
                <FinderContentListWrap></FinderContentListWrap>
                <FinderContentWrap></FinderContentWrap>
            </FinderContentsWrap>
        </FinderWrap>
    )
}

export default Finder;