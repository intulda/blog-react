import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from '../component/layout/Layout';
import Folder from "../component/folder/Folder";
import styled from "styled-components";
import Finder from "../component/finder/Finder";
import {FINDER_OPEN_ACTION} from "../reducers/finder";

const ContentWrap = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(12, 1fr);
`
const FinderWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

const Index = () => {
    const {contents, isFinderOpen, currentFinder} = useSelector((state) => state.finder);
    const dispatch = useDispatch();
    const [list, setList] = useState(contents);
    const [drag, setDrag] = useState(true);
    const [target, setTarget] = useState(null);
    const [currentCol, setCurrentCol] = useState(0);
    const [currentRow, setCurrentRow] = useState(0);


    const onDragStartHandler = useCallback((e) => {
        setTarget(e.target);
    }, []);

    const onDragOverHandler = useCallback((e) => {
        e.preventDefault();
        const row = Math.floor(e.pageY/target.offsetHeight) + 1
        const col = Math.floor(e.pageX/target.offsetWidth) + 1
        setCurrentCol(col);
        setCurrentRow(row);
        // console.log(e.target.getBoundingClientRect().left);
    }, [target]);

    const onDragEndHandler = useCallback((e) => {
        e.preventDefault();
        target.style.gridColumn = currentCol;
        target.style.gridRow = currentRow;
    }, [target, currentCol, currentRow]);

    const onClickDivHandler = useCallback((e) => {
        if(e.target.parentNode.nodeName === 'DIV') {
            e.target.parentNode.focus();
        }
    }, []);

    const onClickOpenHandler = useCallback((e) => {
        const [...targetFinder] = list.filter((obj) => {
            return obj.name === e.target.getAttribute('name');
        });
        dispatch(FINDER_OPEN_ACTION(targetFinder[0]));
    }, [list]);

    return (
        <Layout>
            <ContentWrap onDragStart={onDragStartHandler}
                         onDragOver={onDragOverHandler}
                         onDragEnd={onDragEndHandler}>
            {
                list.map((x) => {
                    return <Folder name={x.name}
                                   draggable={drag}
                                   col={x.col}
                                   row={x.row}
                                   onClickDivHandler={onClickDivHandler}
                                   onClickOpenHandler={onClickOpenHandler}
                                  />
                })
            }
            <FinderWrap>
                {isFinderOpen && <Finder name={currentFinder.name}/>}
            </FinderWrap>
            </ContentWrap>
        </Layout>
    )
}

export default Index;