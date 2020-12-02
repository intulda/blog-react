const initialState = {
    currentPageTitle: 'Kim.BoGeun',
    isPrevAction: false,
    backgroundSwitch: false,
    isSideOpen: false,
    isToastMessageOpen: false,
    toastMessage: '',
    modal: {
        isOpen: false,
        isConfirm: false,
        data: [
            {type: 'createFolder', title: '새로운 폴더', content: '이 폴더의 이름을 입력하십시오.', buttonName: '생성', cancelName: '취소'}
        ]
    }
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

export const SIDE_OPEN_ACTION = () => {
    return {
        type: 'SIDE_OPEN'
    }
}

export const SIDE_ClOSE_ACTION = () => {
    return {
        type: 'SIDE_CLOSE'
    }
}

export const FOLDER_ADD_MODAL_OPEN_ACTION = (data) => {
    return {
        type: 'FOLDER_ADD_MODAL_OPEN',
        data
    }
}

export const FOLDER_ADD_MODAL_CLOSE_ACTION = (data) => {
    return {
        type: 'FOLDER_ADD_MODAL_CLOSE',
        data
    }
}

export const TOAST_OPEN_ACTION = (data) => {
    return {
        type: 'TOAST_OPEN',
        data
    }
}

export const TOAST_CLOSE_ACTION = () => {
    return {
        type: 'TOAST_CLOSE',
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
        case 'FOLDER_ADD_MODAL_OPEN':
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: true,
                    isConfirm: true,
                },
            }
        case 'FOLDER_ADD_MODAL_CLOSE':
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: false,
                    isConfirm: false,
                },
            }
        case 'SIDE_OPEN':
            return {
                ...state,
                isSideOpen: true,
            }
        case 'SIDE_CLOSE':
            return {
                ...state,
                isSideOpen: false,
            }
        case 'TOAST_OPEN':
            return {
                ...state,
                isToastMessageOpen: true,
                toastMessage: action.data,
            }
        case 'TOAST_CLOSE':
            return {
                ...state,
                isToastMessageOpen: false,
                toastMessage: ''
            }
        default :
            return state;
    }
}

export default reducer;