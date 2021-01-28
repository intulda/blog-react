import ticly from '../resource/images/ticly/img_ticly.png';
import petpermint from '../resource/images/petpermint/petpermint.png';

const initialState = {
  dataLoading: false,
  dataError: false,
  project: {
    title: '',
    content: '',
    regDate: '',
    percent: 0,
    images: {
      main: '',
      implements: [],
      step: [],
    },
    environment: [],
    step: [],
    roles: [],
    design: [],
  },
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
  ],
};

export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

export const GET_PROJECT_REQUEST_ACTION = (data) => ({
  type: GET_PROJECT_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_SUCCESS:
      return {
        project: JSON.parse(action.data),
        dataLoading: false,
      };
    case GET_PROJECT_FAILURE:
      return {
        project: {},
        dataLoading: false,
        dataError: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
