const initialState = {
  isPostState: 'Read',
  posts: [],
};

const dummyData = {
  postSeq: 1,
  title: 'DummyTest',
  tags: ['#java'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
  descriptionHtml: '<h1>Lorem ipsum dolor sit amet</h1>, consectetur adipisicing elit. Aperiam at culpa cupiditate dolor facere ipsa iusto maxime mollitia natus, nisi odit optio possimus quae rerum sequi sint totam voluptates voluptatibus!',
  comment: [],
  regDate: '2020-12-30',
  author: '김보근',
};

initialState.posts = [...initialState.posts, dummyData];

export const ADD_POST_REQUEST_ACTION = (data) => ({
  type: 'ADD_POST',
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        isPostState: 'Read',
        posts: [
          ...state.posts,
          action.data,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
