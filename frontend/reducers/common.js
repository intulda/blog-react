const initialState = {
    currentPageTitle: 'Kim.BoGeun',
    isPrevAction: false,
    backgroundSwitch: false
}

export const BACKGROUND_SWITCH_ON_ACTION = () => {
    return {
        type: 'BACKGROUND_SWITCH_ON'
    }
}

export const BACKGROUND_SWITCH_OFF_ACTION = () => {
    return {
        type: 'BACKGROUND_SWITCH_OFF'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BACKGROUND_SWITCH_ON':
            return {
                ...state,
                backgroundSwitch: true
            }
        case 'BACKGROUND_SWITCH_OFF':
            return {
                ...state,
                backgroundSwitch: false,
            }
        default :
            return state;
    }
}

export default reducer;