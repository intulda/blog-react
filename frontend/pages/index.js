import React from 'react';
import Layout from '../component/layout/Layout';

const Index = () => {

    const data = {
        folder: [
            {seq: 1, title: '모든 메모', count: 0},
            {seq: 2, title: 'Portfolio', count: 0},
            {seq: 3, title: 'React', count: 0},
            {seq: 4, title: 'Java', count: 0},
        ],
    }

    return (
        <>
            <Layout search={true}/>
        </>
    )
}

export default Index;