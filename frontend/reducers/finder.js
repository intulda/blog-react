export const initialState = {
    isFinderOpen: false,
    currentFinder: {},
    contents: [
        {name: 'Profile', col: 1, row: 1, data: []},
        {name: 'Project', col: 1, row: 2, data: []},
        {name: 'Study', col: 1, row: 3, data: []}
    ]
}

export const FINDER_OPEN_ACTION = (data) => {
    return {
        type: 'FINDER_OPEN_ACTION',
        data
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FINDER_OPEN_ACTION':
            return {
                isFinderOpen: true,
                currentFinder: action.data,
                contents: [...state.contents]
            }
        default:
            return state;
    }
}

export default reducer;