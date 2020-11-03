import React, {useState, useCallback} from 'react';
import Layout from '../component/layout/Layout';
import Folder from "../component/folder/Folder";
import styled from "styled-components";

const ContentWrap = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(12, 1fr);
`

const Index = () => {
    const data = [
        {name: 'Profile', col: 1, row: 1},
        {name: 'Project', col: 1, row: 2},
        {name: 'Study', col: 1, row: 3},
    ]
    const [list, setList] = useState(data);
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

    return (
        <Layout>
            <ContentWrap onDragStart={onDragStartHandler}
                         onDragOver={onDragOverHandler}
                         onDragEnd={onDragEndHandler}>
            {
                list.map((x, i) => {
                    return <Folder name={x.name}
                                   draggable={drag}
                                   col={x.col}
                                   row={x.row}
                                  />
                })
            }
            </ContentWrap>
        </Layout>
    )
}

export default Index;