import { HYDRATE } from "next-redux-wrapper";
import {combineReducers} from "redux";
import common from './common';

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
    common
});

export default rootReducer;