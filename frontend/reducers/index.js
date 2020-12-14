import { HYDRATE } from "next-redux-wrapper";
import {combineReducers} from "redux";
import common from './common';
import login from './login';
import project from './project';

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state;
        }
    },
    common,
    login,
    project
});

export default rootReducer;