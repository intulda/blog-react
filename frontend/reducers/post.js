const initialState = {
  isPostState: 'Read',
  isPostLoading: false,
  isPostError: null,
  isHashtagLoading: false,
  isHashtagError: null,
  posts: [],
  hashtags: [],
};

export const GET_ALL_POST_LIST_REQUEST = 'GET_ALL_POST_LIST_REQUEST';
export const GET_ALL_POST_LIST_SUCCESS = 'GET_ALL_POST_LIST_SUCCESS';
export const GET_ALL_POST_LIST_FAILURE = 'GET_ALL_POST_LIST_FAILURE';

export const GET_ALL_HASHTAG_LIST_REQUEST = 'GET_ALL_HASHTAG_LIST_REQUEST';
export const GET_ALL_HASHTAG_LIST_SUCCESS = 'GET_ALL_HASHTAG_LIST_SUCCESS';
export const GET_ALL_HASHTAG_LIST_FAILURE = 'GET_ALL_HASHTAG_LIST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_POST_REQUEST_ACTION = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const GET_ALL_HASHTAG_LIST_REQUEST_ACTION = () => ({
  type: GET_ALL_HASHTAG_LIST_REQUEST,
});

export const GET_ALL_POST_LIST_REQUEST_ACTION = () => ({
  type: GET_ALL_POST_LIST_REQUEST,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        isPostState: 'Read',
        posts: [
          ...state.posts,
        ],
      };
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        posts: [
          ...state.posts,
        ],
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isPostError: action.data,
      };
    }
    case GET_ALL_POST_LIST_REQUEST:
      return {
        ...state,
        isPostLoading: true,
      };
    case GET_ALL_POST_LIST_SUCCESS:
      return {
        ...state,
        isPostLoading: false,
        posts: action.data,
      };
    case GET_ALL_POST_LIST_FAILURE:
      return {
        ...state,
        isPostLoading: false,
        isPostError: action.data,
      };
    case GET_ALL_HASHTAG_LIST_REQUEST:
      return {
        ...state,
        isHashtagLoading: true,
      };
    case GET_ALL_HASHTAG_LIST_SUCCESS:
      return {
        ...state,
        isHashtagLoading: false,
        hashtags: action.data,
      };
    case GET_ALL_HASHTAG_LIST_FAILURE:
      return {
        ...state,
        isHashtagLoading: false,
        isHashtagError: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
