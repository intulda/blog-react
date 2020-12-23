import ticly from '../resource/images/img_ticly.png'
import petpermint from '../resource/images/Petpermint/petpermint.png';

const initialState = {
    data: [
        {
            id: 1,
            title: 'Ticly',
            description: '영어 아티클을 읽으며, 트렌드 파악과 영어 공부를 함께 하는 학습 플랫폼 입니다!',
            percent: 60,
            imageUrl: `${ticly}`,
        },
        {
            id: 2,
            title: 'Petpermint',
            description: '강아지와 고양이의 반려동물이 늘어가는 추세에 그에 관련된 정보와 정보 공유를 하는 플랫폼 입니다!',
            percent: 50,
            imageUrl: `${petpermint}`,
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