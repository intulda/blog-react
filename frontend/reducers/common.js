const initialState = {
    currentPageTitle: 'Kim.BoGeun',
    isPrevAction: false,
    backgroundSwitch: false,
    isSideOpen: false,
    isToastMessageOpen: false,
    isDropdownMenuOpen: false,
    toastMessage: '',
    modal: {
        isOpen: false,
        isConfirm: false,
        data: [
            {
                seq: 1,
                title: 'Posts',
                link: 'board'
            },
        ]
    }
}

export const DROPDOWN_MENU_ON_ACTION = () => {
    return {
        type: 'DROPDOWN_MENU_ON',
    }
}

export const DROPDOWN_MENU_OFF_ACTION = () => {
    return {
        type: 'DROPDOWN_MENU_OFF'
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

export const FOLDER_ADD_ACTION = (data) => {
    return {
        type: 'FOLDER_ADD',
        data
    }
}

const dummyData = {
    seq: 2,
    title: 'React',
    link: 'react'
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FOLDER_ADD':
            return {
                ...state,
                modal : {
                    ...state.modal,
                    isOpen: false,
                    data : [...state.modal.data, dummyData],
                }
            }
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
        case 'DROPDOWN_MENU_ON':
            return {
                ...state,
                isDropdownMenuOpen: true,
            }
        case 'DROPDOWN_MENU_OFF':
            return {
                ...state,
                isDropdownMenuOpen: false,
            }
        default :
            return state;
    }
}

export default reducer;