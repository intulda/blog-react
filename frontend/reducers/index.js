import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import common from './common';
import login from './login';
import post from './post';
import project from './project';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        common,
        login,
        project,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
