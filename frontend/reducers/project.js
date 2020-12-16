const initialState = {
    data: [
        {
            id: 1,
            title: 'Ticly',
            description: '영어 아티클을 읽으며, 트렌드 파악과 영어 공부를 함께 하는 학습 플랫폼 입니다!',
            percent: 60,
            imageUrl: '',
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;