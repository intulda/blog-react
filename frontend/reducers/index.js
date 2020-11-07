import { HYDRATE } from "next-redux-wrapper";
import {combineReducers} from "redux";

import user from './user';
import finder from './finder';

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
    user,
    finder,
});

export default rootReducer;