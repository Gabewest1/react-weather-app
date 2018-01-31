function reducer(state = { isNightTime: false }, action) {
    switch (action.type) {
        case "IS_NIGHTTIME": 
            return { isNightTime: action.payload }

        default:
            return state
    }
}

export default reducer
