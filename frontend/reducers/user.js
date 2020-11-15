export const initialState = {
    isLoggedIn: true,
    user: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoginFormOpen: false,
                isLoggedIn: false,
                user: action.data,
            }
        case 'OPEN_LOGIN_FORM':
            return {
                ...state,
                isLoginFormOpen: true,
            }
        default:
            return state;
    }
}

export default reducer;