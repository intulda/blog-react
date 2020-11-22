import React from 'react';
import Layout from '../component/layout/Layout';
import styled from "styled-components";
import Memo from "../component/memo/Memo";

const CurrentPage = styled.div`
    font-size: 2rem;
    font-weight: bold;
    padding: 10px 0;
`

const Index = () => {

    return (
        <Layout>
            <CurrentPage>메모</CurrentPage>
            <Memo/>
        </Layout>
    )
}

export default Index;