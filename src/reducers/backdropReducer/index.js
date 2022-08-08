const backdropReducer = (state, action) => {
    switch (action.type) {
        case "GET_BACKDROPS":
            return action.payload

        default:
            return state
    }
}

export default backdropReducer
