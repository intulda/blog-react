const initialState = {
    isLoggedIn: false,
    isLoginModalOpen: false,
    user : {
        nickname: '김코몽',
    }
}

export const LOGIN_FORM_OPEN_ACTION = () => {
    return {
        type: 'LOGIN_FORM_OPEN'
    }
};

export const LOGIN_FORM_CLOSE_ACTION = () => {
    return {
        type: 'LOGIN_FORM_CLOSE'
    }
};

export const LOGIN_ACTION = (data) => {
    return {
        type: 'LOGIN',
        data
    }
}
export const LOGOUT_ACTION = () => {
    return {
        type: 'LOGOUT',
    }
}

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_FORM_OPEN':
            return {
                ...state,
                isLoginModalOpen: true,
            }
        case 'LOGIN_FORM_CLOSE':
            return {
                ...state,
                isLoginModalOpen: false,
            }
        case 'LOGIN':
            return {
                ...state,
                isLoginModalOpen: false,
                isLoggedIn: true,
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
            }
        default:
            return state;
    }
});

export default reducer;