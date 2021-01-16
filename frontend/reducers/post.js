import produce from 'immer';

const initialState = {
  isPostState: 'Read',
  isPostLoading: false,
  isPostError: null,
  isHashtagLoading: false,
  isHashtagError: null,
  post: {
    User: {},
    Comments: [],
    title: '',
    content: '',
    contentHTML: '',
    createdAt: '',
  },
  posts: [],
  dummyPosts: [],
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

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const LIST_FILTER = 'LIST_FILTER';

export const LIST_FILTER_ACTION = (data) => ({
  type: LIST_FILTER,
  data,
});

export const GET_POST_REQUEST_ACTION = (data) => ({
  type: GET_POST_REQUEST,
  data,
});

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

const reducer = (state = initialState, action) => produce(state, (draft) => {
  console.log(action);
  switch (action.type) {
    case LIST_FILTER:
      draft.dummyPosts = action.data;
      break;
    case GET_POST_REQUEST:
      draft.isPostLoading = true;
      break;
    case GET_POST_SUCCESS:
      draft.isPostLoading = false;
      draft.post = action.data;
      break;
    case GET_POST_FAILURE:
      draft.isPostLoading = false;
      draft.isPostError = action.data;
      break;
    case ADD_POST_REQUEST:
      draft.isPostState = 'Read';
      break;
    case ADD_POST_SUCCESS: {
      draft.posts.unshift(action.data);
      draft.dummyPosts.unshift(action.data);
      break;
    }
    case ADD_POST_FAILURE: {
      draft.isPostError = action.data;
      break;
    }
    case GET_ALL_POST_LIST_REQUEST:
      draft.isPostLoading = true;
      break;
    case GET_ALL_POST_LIST_SUCCESS:
      draft.isPostLoading = false;
      draft.posts = action.data;
      draft.dummyPosts = action.data;
      break;
    case GET_ALL_POST_LIST_FAILURE:
      draft.isPostLoading = false;
      draft.isPostError = action.data;
      break;
    case GET_ALL_HASHTAG_LIST_REQUEST:
      draft.isHashtagLoading = true;
      break;
    case GET_ALL_HASHTAG_LIST_SUCCESS:
      draft.isHashtagLoading = false;
      draft.hashtags = action.data;
      break;
    case GET_ALL_HASHTAG_LIST_FAILURE:
      draft.isHashtagLoading = false;
      draft.isHashtagError = action.data;
      break;
    default:
      break;
  }
});

export default reducer;
