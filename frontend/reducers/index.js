import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    isLoginFormOpen: true,
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    finder: {
        profile: [],
        project: [],
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            }
        case 'OPEN_LOGIN_FORM':
            return {
                isLoginFormOpen: true,
                ...state,
            }
        case 'LOG_IN':
            console.log(action);
            return {
                isLoginFormOpen: false,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }
        default:
            return state;
    }
};

export default rootReducer;